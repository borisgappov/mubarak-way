# MubarakWay Server

Серверное приложение MubarakWay на базе NestJS.

## Описание

Бэкенд-сервер для приложения MubarakWay, который предоставляет API для работы с:
- **Goals** (Цели) - управление целями пользователя
- **Duas** (Дуа) - мусульманские молитвы
- **Allah Names** (Имена Аллаха) - изучение 99 имен Аллаха
- **Statistics** (Статистика) - статистика активности пользователя
- **User Metadata** (Метаданные пользователя) - заметки, история просмотров

## Архитектура

- **NestJS** - основной фреймворк
- **TypeORM** - ORM для работы с базой данных (SQLite)
- **JWT** - аутентификация
- **Axios** - проксирование запросов к внешнему API
- **Passport** - стратегия аутентификации

## Установка

```bash
npm install
```

## Настройка

Создайте файл `.env` в корне проекта:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DATABASE_PATH=mubarakway.db

# JWT Configuration
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=7d

# External API Configuration
API_BASE_URL=https://bot.e-replika.ru
API_TOKEN=test_token_123

# Frontend Configuration
FRONTEND_URL=*
```

## Запуск приложения

```bash
# Режим разработки
npm run start:dev

# Продакшн режим
npm run start:prod
```

## API Endpoints

### Документация API
- `GET /docs` - Swagger документация (прокси к https://bot.e-replika.ru/docs)
- `GET /openapi.json` - OpenAPI спецификация (прокси к https://bot.e-replika.ru/openapi.json)

### Аутентификация
- `POST /api/v1/auth/login` - вход в систему

### Goals (Цели)
- `GET /api/v1/goals` - получить список целей
- `GET /api/v1/goals/:goalId` - получить цель
- `POST /api/v1/goals` - создать цель
- `PUT /api/v1/goals/:goalId` - обновить цель
- `PATCH /api/v1/goals/:goalId` - частично обновить цель
- `DELETE /api/v1/goals/:goalId` - удалить цель
- `POST /api/v1/goals/:goalId/mark` - отметить цель
- `POST /api/v1/goals/bind` - привязать цель
- `GET /api/v1/goals/bindings` - получить привязки
- `GET /api/v1/goals/:goalId/metadata` - получить метаданные
- `POST /api/v1/goals/:goalId/metadata/notes` - обновить заметки

### Duas (Дуа)
- `GET /api/v1/duas` - получить список дуа
- `GET /api/v1/duas/search` - поиск дуа
- `GET /api/v1/duas/:duaId` - получить дуа
- `GET /api/v1/duas/:duaId/metadata` - получить метаданные
- `POST /api/v1/duas/:duaId/metadata/notes` - обновить заметки

### Allah Names (Имена Аллаха)
- `GET /api/v1/allah-names` - получить список имен
- `GET /api/v1/allah-names/random` - получить случайное имя
- `GET /api/v1/allah-names/number/:number` - получить имя по номеру
- `GET /api/v1/allah-names/progress` - получить прогресс
- `GET /api/v1/allah-names/:contentId` - получить имя по ID
- `POST /api/v1/allah-names/:contentId/view` - отметить как просмотренное
- `POST /api/v1/allah-names/:contentId/mark-learned` - отметить как изученное
- `POST /api/v1/allah-names/:contentId/unmark-learned` - снять отметку изученного
- `GET /api/v1/allah-names/:contentId/metadata` - получить метаданные
- `POST /api/v1/allah-names/:contentId/metadata/notes` - обновить заметки

### Statistics (Статистика)
- `GET /api/v1/statistics/study-time` - получить время изучения
- `GET /api/v1/statistics/activity?days=30` - получить активность за период
- `GET /api/v1/statistics/view-history` - получить историю просмотров

## Тестирование

```bash
# unit тесты
npm run test

# e2e тесты
npm run test:e2e

# покрытие тестами
npm run test:cov
```

## Структура проекта

```
src/
├── auth/              # Модуль аутентификации
├── goals/             # Модуль целей
├── duas/              # Модуль дуа
├── allah-names/       # Модуль имен Аллаха
├── statistics/        # Модуль статистики
├── user-metadata/     # Модуль метаданных пользователя
├── proxy/             # Сервис проксирования запросов
├── database/          # Конфигурация базы данных
├── entities/          # Сущности TypeORM
└── decorators/        # Кастомные декораторы
```

## Поддержка

Приложение работает на порту 3000 по умолчанию.

