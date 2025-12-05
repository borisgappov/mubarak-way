import {
  Controller,
  All,
  Req,
  Res,
  Body,
  Query,
  Param,
  Next,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ProxyService } from './proxy.service';

@Controller('*')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All('*')
  async proxyAll(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: any,
    @Query() query: any,
    @Next() next: NextFunction,
  ) {
    // Получаем путь запроса
    let url = req.url;
    // Убираем query string из URL для проверки
    const queryIndex = url.indexOf('?');
    if (queryIndex !== -1) {
      url = url.substring(0, queryIndex);
    }

    // Исключаем путь api/v1/statistics - он обрабатывается StatisticsController
    if (url.startsWith('/api/v1/statistics')) {
      // Передаем управление следующему обработчику (StatisticsController)
      return next();
    }

    // Исключаем путь api/v1/goal-notes - он обрабатывается GoalNoteController
    if (url.startsWith('/api/v1/goal-notes')) {
      // Передаем управление следующему обработчику (GoalNoteController)
      return next();
    }

    try {
      // Получаем метод запроса
      const method = req.method.toLowerCase() as
        | 'get'
        | 'post'
        | 'put'
        | 'patch'
        | 'delete';

      // Проксируем запрос
      const response = await this.proxyService.proxyRequest(
        method,
        url,
        body,
        { params: query },
        req.headers as Record<string, string | string[]>,
      );

      // Устанавливаем заголовки ответа
      this.setResponseHeaders(res, response.headers);

      // Определяем тип контента для правильной отправки ответа
      const contentType = res.getHeader('content-type') as string;
      
      // Если это HTML или текст, отправляем как текст
      if (contentType && (contentType.includes('text/html') || contentType.includes('text/plain'))) {
        return res.status(response.status).send(response.data);
      }
      
      // Для остальных случаев отправляем как JSON
      return res.status(response.status).json(response.data);
    } catch (error: any) {
      // Если ошибка уже является HttpException, пробрасываем её
      if (error.status) {
        const errorResponse = error.response || error.message;
        // Проверяем, является ли ответ объектом (JSON) или строкой
        if (typeof errorResponse === 'object') {
          return res.status(error.status).json(errorResponse);
        }
        return res.status(error.status).send(errorResponse);
      }
      return res.status(500).json({ error: error.message || 'Proxy error' });
    }
  }

  private setResponseHeaders(res: Response, headers: Record<string, string>) {
    Object.keys(headers).forEach((key) => {
      res.setHeader(key, headers[key]);
    });
  }
}

