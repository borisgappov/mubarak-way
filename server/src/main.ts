import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  // Включаем CORS
  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL', '*'),
    credentials: true,
  });

  // Включаем валидацию
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(port);
  console.log(`MubarakWay server is running on http://localhost:${port}`);
}
bootstrap();

