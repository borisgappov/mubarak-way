# MubarakWay

Мусульманское приложение для изучения и практики исламских знаний, включающее работу с целями, дуа, именами Аллаха и статистикой.

## Структура проекта

Проект состоит из двух основных частей:

- **`client/`** - React-приложение (фронтенд)
- **`server/`** - NestJS-сервер (бэкенд)

## Технологический стек

### Клиент
- **React 18** - библиотека для создания пользовательских интерфейсов
- **TypeScript** - типизированный JavaScript
- **Vite** - быстрый инструмент сборки
- **React Router** - маршрутизация
- **Axios** - HTTP клиент

### Сервер
- **NestJS** - Node.js фреймворк
- **TypeORM** - ORM для работы с базой данных
- **SQLite** - база данных
- **JWT** - аутентификация
- **Passport** - стратегия аутентификации
- **Axios** - проксирование запросов к внешнему API

## Быстрый старт

### Предварительные требования

- Node.js (версия 18 или выше)
- npm или yarn

### Установка

1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd MubarakWay
```

2. Установите зависимости для клиента:
```bash
cd client
npm install
```

3. Установите зависимости для сервера:
```bash
cd ../server
npm install
```

### Настройка сервера

Создайте файл `.env` в папке `server/`:

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

### Запуск приложения

#### Запуск сервера

В папке `server/`:

```bash
# Режим разработки
npm run dev

# Или
npm run start:dev
```

Сервер будет доступен по адресу `http://localhost:3000`

#### Запуск клиента

В папке `client/`:

```bash
npm run dev
```

Клиент будет доступен по адресу `http://localhost:5173`

## Сборка для production

### Сборка сервера

```bash
cd server
npm run build
npm run prod
```

### Сборка клиента

```bash
cd client
npm run build
```

Собранные файлы будут находиться в папке `client/dist`

## Основные функции

- **Цели (Goals)** - управление целями пользователя
- **Дуа (Duas)** - мусульманские молитвы
- **Имена Аллаха (Allah Names)** - изучение 99 имен Аллаха
- **Статистика (Statistics)** - статистика активности пользователя
- **Метаданные пользователя** - заметки, история просмотров

## API Документация

После запуска сервера документация API доступна по адресам:
- `GET /docs` - Swagger документация
- `GET /openapi.json` - OpenAPI спецификация

## Разработка

### Генерация API клиента

В папке `client/` можно сгенерировать TypeScript клиент на основе OpenAPI спецификации:

```bash
npm run generate:api
```

### Тестирование

#### Тесты сервера

```bash
cd server

# Unit тесты
npm run test

# E2E тесты
npm run test:e2e

# Покрытие тестами
npm run test:cov
```

#### Линтинг

```bash
# Клиент
cd client
npm run lint

# Сервер
cd server
npm run lint
```

## Структура проекта

```
MubarakWay/
├── client/                 # React-приложение
│   ├── src/
│   │   ├── api/           # API клиент
│   │   ├── components/    # React компоненты
│   │   └── generated/     # Сгенерированный API клиент
│   └── package.json
│
└── server/                 # NestJS-сервер
    ├── src/
    │   ├── auth/          # Модуль аутентификации
    │   ├── goal-notes/    # Модуль заметок к целям
    │   ├── user-metadata/ # Модуль метаданных пользователя
    │   ├── proxy/         # Сервис проксирования запросов
    │   ├── database/      # Конфигурация базы данных
    │   ├── entities/      # Сущности TypeORM
    │   └── decorators/    # Кастомные декораторы
    └── package.json
```

## Дополнительная информация

Подробную информацию о каждой части проекта смотрите в соответствующих README:
- [Клиент](./client/README.md)
- [Сервер](./server/README.md)

## Лицензия

UNLICENSED

