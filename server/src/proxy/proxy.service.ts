import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { UserMetadataService } from '../user-metadata/user-metadata.service';
import { AuthService } from '../auth/auth.service';

export interface ProxyResponse {
  data: any;
  headers: Record<string, string>;
  status: number;
}

@Injectable()
export class ProxyService {
  private readonly axiosInstance: AxiosInstance;
  private readonly apiToken: string;
  private readonly apiBaseUrl: string;

  constructor(
    private configService: ConfigService,
    private userMetadataService: UserMetadataService,
    private authService: AuthService,
  ) {
    this.apiToken = this.configService.get<string>('API_TOKEN');
    if (!this.apiToken) {
      throw new Error('API_TOKEN is required in environment variables');
    }
    
    this.apiBaseUrl = this.configService.get<string>(
      'API_BASE_URL',
      'https://bot.e-replika.ru',
    );

    this.axiosInstance = axios.create({
      baseURL: this.apiBaseUrl,
      timeout: 30000,
    });
  }

  /**
   * Извлекает userId из JWT токена в заголовках
   */
  private async extractUserIdFromHeaders(
    requestHeaders?: Record<string, string | string[]>,
  ): Promise<number | null> {
    if (!requestHeaders) {
      return null;
    }

    const authHeader =
      requestHeaders['authorization'] || requestHeaders['Authorization'];
    if (!authHeader) {
      return null;
    }

    const authValue = Array.isArray(authHeader)
      ? authHeader[0]
      : authHeader;
    if (!authValue || typeof authValue !== 'string') {
      return null;
    }

    // Извлекаем токен из заголовка "Bearer <token>"
    const token = authValue.replace(/^Bearer\s+/i, '').trim();
    if (!token) {
      return null;
    }

    // Проверяем, не является ли это API токеном (тестовый токен)
    if (token === this.apiToken) {
      return 1; // Тестовый пользователь
    }

    // Декодируем JWT токен
    try {
      const payload = await this.authService.validateToken(token);
      if (payload && payload.sub) {
        return payload.sub;
      }
    } catch (error) {
      // Токен невалидный, игнорируем
    }

    return null;
  }

  /**
   * Парсит URL и извлекает goalId, duaId, allahNameId
   */
  private parseUrlForIds(
    url: string,
    params?: Record<string, any>,
    data?: any,
  ): { goalId?: string; duaId?: string; allahNameId?: string } {
    const result: {
      goalId?: string;
      duaId?: string;
      allahNameId?: string;
    } = {};

    // Парсим URL для извлечения ID из пути (string-параметры, не нужны regexp)
    // Примеры: /api/v1/goals/abc123, /api/v1/duas/xyz-456, /api/v1/allah-names/7fa1e8

    // Разбиваем путь на части, чтобы извлекать id как строки
    const urlParts = url.split('/').map((part) => decodeURIComponent(part));

    const goalIdx = urlParts.findIndex(
      (p) => p.toLowerCase() === 'goals'
    );
    if (goalIdx !== -1 && urlParts[goalIdx + 1]) {
      result.goalId = urlParts[goalIdx + 1];
    }

    const duaIdx = urlParts.findIndex(
      (p) => p.toLowerCase() === 'duas'
    );
    if (duaIdx !== -1 && urlParts[duaIdx + 1]) {
      result.duaId = urlParts[duaIdx + 1];
    }

    const allahNameIdx = urlParts.findIndex(
      (p) =>
        p.toLowerCase() === 'allah-names' ||
        p.toLowerCase() === 'allah_names'
    );
    if (
      allahNameIdx !== -1 &&
      urlParts[allahNameIdx + 1]
    ) {
      result.allahNameId = urlParts[allahNameIdx + 1];
    }

    // Также проверяем query параметры
    if (params) {
      if (params.goalId && !result.goalId) {
        result.goalId = String(params.goalId);
      }
      if (params.duaId && !result.duaId) {
        result.duaId = String(params.duaId);
      }
      if (params.allahNameId && !result.allahNameId) {
        result.allahNameId = String(params.allahNameId);
      }
    }

    // Проверяем тело запроса (для POST/PUT/PATCH)
    if (data && typeof data === 'object') {
      if (data.goalId && !result.goalId) {
        result.goalId = String(data.goalId);
      }
      if (data.duaId && !result.duaId) {
        result.duaId = String(data.duaId);
      }
      if (data.allahNameId && !result.allahNameId) {
        result.allahNameId = String(data.allahNameId);
      }
    }

    return result;
  }

  /**
   * Логирует событие просмотра в БД, если это необходимо
   */
  private async logViewEvent(
    userId: number | null,
    url: string,
    params?: Record<string, any>,
    data?: any,
  ): Promise<void> {
    if (!userId) {
      return; // Не логируем, если нет пользователя
    }

    // Парсим URL для извлечения ID
    const ids = this.parseUrlForIds(url, params, data);

    // Логируем только если есть хотя бы один ID
    if (ids.goalId || ids.duaId || ids.allahNameId) {
      try {
        await this.userMetadataService.updateLastVisited(
          userId,
          ids.goalId,
          ids.duaId,
          ids.allahNameId,
        );
      } catch (error) {
        // Не прерываем выполнение запроса при ошибке логирования
        console.error('Error logging view event:', error);
      }
    }
  }

  /**
   * Проксирует запрос с пробросом всех заголовков и параметров
   */
  async proxyRequest(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    requestHeaders?: Record<string, string | string[]>,
  ): Promise<ProxyResponse> {
    try {
      // Извлекаем userId и логируем событие перед выполнением запроса
      const userId = await this.extractUserIdFromHeaders(requestHeaders);
      await this.logViewEvent(userId, url, config?.params, data);
      // Формируем заголовки для запроса - пробрасываем все заголовки от клиента
      const headers: Record<string, string> = {};
      
      // Пробрасываем все заголовки от клиента (исключая только системные, которые нельзя пробрасывать)
      if (requestHeaders) {
        const excludedHeaders = [
          'host',
          'connection',
          'content-length',
          'transfer-encoding',
        ];

        Object.keys(requestHeaders).forEach((key) => {
          const lowerKey = key.toLowerCase();
          if (!excludedHeaders.includes(lowerKey)) {
            const value = requestHeaders[key];
            // Обрабатываем массивы заголовков
            if (Array.isArray(value)) {
              headers[key] = value.join(', ');
            } else if (typeof value === 'string') {
              headers[key] = value;
            }
          }
        });
      }

      // Если Authorization не был передан клиентом, добавляем наш токен
      if (!headers['authorization'] && !headers['Authorization']) {
        headers['Authorization'] = `Bearer ${this.apiToken}`;
      }

      // Если Content-Type не указан и есть данные (не GET/DELETE без тела), устанавливаем по умолчанию
      if (
        data !== null &&
        data !== undefined &&
        !headers['content-type'] &&
        !headers['Content-Type']
      ) {
        headers['Content-Type'] = 'application/json';
      }

      const request: AxiosRequestConfig = {
        method,
        url,
        data,
        headers,
        ...config,
        // Объединяем параметры из config с переданными параметрами
        params: {
          ...(config?.params || {}),
        },
      };

      const response: AxiosResponse = await this.axiosInstance.request(request);

      // Возвращаем данные и заголовки ответа
      return {
        data: response.data,
        headers: this.sanitizeResponseHeaders(response.headers),
        status: response.status,
      };
    } catch (error: any) {
      if (error.response) {
        throw new HttpException(
          error.response.data || error.message,
          error.response.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else if (error.request) {
        throw new HttpException(
          'External API is not responding',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      } else {
        throw new HttpException(
          error.message || 'Proxy error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  /**
   * Проксирует запрос только с данными (для обратной совместимости)
   */
  async proxyRequestData(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    const response = await this.proxyRequest(method, url, data, config);
    return response.data;
  }

  async proxyPublicRequest(
    url: string,
    config?: AxiosRequestConfig,
    requestHeaders?: Record<string, string | string[]>,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete' = 'get',
    data?: any,
  ): Promise<ProxyResponse> {
    try {
      // Извлекаем userId и логируем событие перед выполнением запроса
      const userId = await this.extractUserIdFromHeaders(requestHeaders);
      await this.logViewEvent(userId, url, config?.params, data);

      // Создаем отдельный экземпляр axios без авторизации для публичных эндпоинтов
      const publicAxios = axios.create({
        baseURL: this.apiBaseUrl,
        timeout: 30000,
      });

      // Формируем заголовки для запроса
      const headers: Record<string, string> = {};
      if (requestHeaders) {
        const excludedHeaders = [
          'host',
          'connection',
          'content-length',
          'transfer-encoding',
          'accept-encoding',
          'authorization',
        ];

        Object.keys(requestHeaders).forEach((key) => {
          const lowerKey = key.toLowerCase();
          if (!excludedHeaders.includes(lowerKey)) {
            const value = requestHeaders[key];
            // Обрабатываем массивы заголовков
            if (Array.isArray(value)) {
              headers[key] = value.join(', ');
            } else if (typeof value === 'string') {
              headers[key] = value;
            }
          }
        });
      }

      const response: AxiosResponse = await publicAxios.request({
        method,
        url,
        data,
        ...config,
        headers,
      });

      return {
        data: response.data,
        headers: this.sanitizeResponseHeaders(response.headers),
        status: response.status,
      };
    } catch (error: any) {
      if (error.response) {
        throw new HttpException(
          error.response.data || error.message,
          error.response.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else if (error.request) {
        throw new HttpException(
          'External API is not responding',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      } else {
        throw new HttpException(
          error.message || 'Proxy error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async proxyPublicHtml(
    url: string,
    requestHeaders?: Record<string, string | string[]>,
  ): Promise<ProxyResponse> {
    try {
      // Извлекаем userId и логируем событие перед выполнением запроса
      const userId = await this.extractUserIdFromHeaders(requestHeaders);
      await this.logViewEvent(userId, url);

      const publicAxios = axios.create({
        baseURL: this.apiBaseUrl,
        timeout: 30000,
        responseType: 'text',
      });

      // Формируем заголовки для запроса
      const headers: Record<string, string> = {};
      if (requestHeaders) {
        const excludedHeaders = [
          'host',
          'connection',
          'content-length',
          'transfer-encoding',
          'accept-encoding',
          'authorization',
        ];

        Object.keys(requestHeaders).forEach((key) => {
          const lowerKey = key.toLowerCase();
          if (!excludedHeaders.includes(lowerKey)) {
            const value = requestHeaders[key];
            // Обрабатываем массивы заголовков
            if (Array.isArray(value)) {
              headers[key] = value.join(', ');
            } else if (typeof value === 'string') {
              headers[key] = value;
            }
          }
        });
      }

      const response: AxiosResponse = await publicAxios.get(url, { headers });

      return {
        data: response.data,
        headers: this.sanitizeResponseHeaders(response.headers),
        status: response.status,
      };
    } catch (error: any) {
      if (error.response) {
        throw new HttpException(
          error.response.data || error.message,
          error.response.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else if (error.request) {
        throw new HttpException(
          'External API is not responding',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      } else {
        throw new HttpException(
          error.message || 'Proxy error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  /**
   * Пробрасывает все заголовки ответа клиенту (исключая только системные)
   */
  private sanitizeResponseHeaders(
    headers: Record<string, any>,
  ): Record<string, string> {
    const sanitized: Record<string, string> = {};
    // Исключаем только те заголовки, которые нельзя пробрасывать
    const excludedHeaders = [
      'content-encoding',
      'transfer-encoding',
      'connection',
    ];

    Object.keys(headers).forEach((key) => {
      const lowerKey = key.toLowerCase();
      if (!excludedHeaders.includes(lowerKey)) {
        const value = headers[key];
        if (typeof value === 'string') {
          sanitized[key] = value;
        } else if (Array.isArray(value) && value.length > 0) {
          sanitized[key] = value.join(', ');
        }
      }
    });

    return sanitized;
  }
}

