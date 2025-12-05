import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  CanActivate,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private configService: ConfigService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    // Проверяем тестовый токен перед вызовом Passport стратегии
    if (authHeader) {
      const token = authHeader.replace(/^Bearer\s+/i, '').trim();
      const apiToken = this.configService.get<string>('API_TOKEN');
     
      // Если токен совпадает с API_TOKEN, создаем тестового пользователя
      // Это позволяет использовать тестовый токен для разработки
      if (apiToken && token && token === apiToken) {
        request.user = { userId: 1 };
        // Возвращаем Promise, который сразу резолвится
        return Promise.resolve(true);
      }
    }

    // Иначе используем стандартную JWT аутентификацию через Passport
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // Если есть ошибка или нет пользователя, выбрасываем исключение
    // Но только если это не тестовый токен (который уже обработан в canActivate)
    if (err || !user) {
      throw err || new UnauthorizedException('Invalid or missing token');
    }
    return user;
  }
}


