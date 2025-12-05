import { useState, useEffect } from 'react';
import './Statistics.css';
import { statisticsApi } from '../api/client';

interface Statistics {
  totalStudyHours?: number;
  goalsVisited?: number;
  duasViewed?: number;
  allahNamesViewed?: number;
  activityByDay?: { date: string; count: number }[];
}

function Statistics() {
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    loadStatistics();
    loadNotes();
  }, []);

  const loadStatistics = async () => {
    try {
      setLoading(true);
      const data = await statisticsApi.getStatistics();
      setStatistics(data);
      setError(null);
    } catch (err) {
      // Если запрос не удался, используем моковые данные
      setStatistics({
        totalStudyHours: 0,
        goalsVisited: 0,
        duasViewed: 0,
        allahNamesViewed: 0,
        activityByDay: [],
      });
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const loadNotes = async () => {
    try {
      const data = await statisticsApi.getNotes();
      setNotes(data);
    } catch (err) {
      // Игнорируем ошибку, если эндпоинт не существует
    }
  };

  const saveNote = async (goalId: string, note: string) => {
    try {
      await statisticsApi.saveNote(goalId, note);
      setNotes({ ...notes, [goalId]: note });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка сохранения заметки');
    }
  };

  if (loading) {
    return <div className="loading">Загрузка статистики...</div>;
  }

  return (
    <div className="statistics">
      <div className="page-header">
        <h1>Статистика и заметки</h1>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="statistics-grid">
        <div className="stat-card">
          <h3>Всего часов изучения</h3>
          <div className="stat-value">{statistics?.totalStudyHours || 0}</div>
        </div>

        <div className="stat-card">
          <h3>Посещено целей</h3>
          <div className="stat-value">{statistics?.goalsVisited || 0}</div>
        </div>

        <div className="stat-card">
          <h3>Просмотрено дуа</h3>
          <div className="stat-value">{statistics?.duasViewed || 0}</div>
        </div>

        <div className="stat-card">
          <h3>Просмотрено имен Аллаха</h3>
          <div className="stat-value">{statistics?.allahNamesViewed || 0}</div>
        </div>
      </div>

      {statistics?.activityByDay && statistics.activityByDay.length > 0 && (
        <div className="activity-section">
          <h2>Активность по дням</h2>
          <div className="activity-chart">
            {statistics.activityByDay.map((day, index) => (
              <div key={index} className="activity-bar">
                <div className="bar-fill" style={{ height: `${(day.count / 10) * 100}%` }}></div>
                <div className="bar-label">{new Date(day.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</div>
                <div className="bar-value">{day.count}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="notes-section">
        <h2>Заметки к целям</h2>
        <div className="notes-list">
          <p className="notes-info">
            Заметки можно добавлять на странице целей. Здесь отображаются сохраненные заметки.
          </p>
          {Object.keys(notes).length === 0 ? (
            <p>Нет сохраненных заметок</p>
          ) : (
            Object.entries(notes).map(([goalId, note]) => (
              <div key={goalId} className="note-item">
                <div className="note-goal-id">Цель #{goalId}</div>
                <div className="note-text">{note}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Statistics;

