import { Configuration } from '../generated/runtime';
import { AllahNamesApi } from '../generated/apis/AllahNamesApi';
import { DuasApi, GoalsApi } from '../generated';

// Настройка базового URL для локального бэкенда
const BASE_URL = 'http://localhost:3000';
const TEST_TOKEN = 'test_token_123';
// Создаём конфигурацию для API клиента
export const apiConfig = new Configuration({
  basePath: BASE_URL,
  // Здесь можно добавить токен авторизации, если нужно
  accessToken: () => Promise.resolve(TEST_TOKEN),
});

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TEST_TOKEN}`,
};

// Экспортируем настроенные API клиенты
export const allahNamesApi = new AllahNamesApi(apiConfig);

export const goalsApi = new GoalsApi(apiConfig);

export const duasApi = new DuasApi(apiConfig);

export const statisticsApi = {
  baseUrl: BASE_URL,
  
  async getStatistics() {
    const response = await fetch(`${BASE_URL}/api/v1/statistics`, { headers });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
};

export const notesApi = {
  baseUrl: BASE_URL,
  async createNote(goalId: string | number, content: string) {
    const response = await fetch(`${BASE_URL}/api/v1/goal-notes`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ goalId, content }),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
  
  async getNotes(goalId?: string | number) {
    const url = goalId !== undefined
      ? `${BASE_URL}/api/v1/goal-notes?goalId=${goalId}`
      : `${BASE_URL}/api/v1/goal-notes`;
    const response = await fetch(url, {
      headers,
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
  
  async getNote(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/goal-notes/${id}`, {
      headers,
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
  
  async updateNote(id: number, content: string) {
    const response = await fetch(`${BASE_URL}/api/v1/goal-notes/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({ content }),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
  
  async deleteNote(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/goal-notes/${id}`, {
      method: 'DELETE',
      headers,
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
};

