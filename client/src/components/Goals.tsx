import { useState, useEffect } from 'react';
import { goalsApi, notesApi } from '../api/client';
import type { Goal, GoalCreate, GoalUpdate } from '../generated/models';
import './Goals.css';

interface GoalNote {
  id: number;
  userId: number;
  goalId: string; // goalId - это строка
  content: string;
  createdAt: string;
  updatedAt: string;
}

function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [formData, setFormData] = useState<Partial<GoalCreate & GoalUpdate>>({});
  const [notes, setNotes] = useState<Record<string, GoalNote[]>>({});
  const [expandedGoals, setExpandedGoals] = useState<Set<string>>(new Set());
  const [editingNote, setEditingNote] = useState<GoalNote | null>(null);
  const [noteContent, setNoteContent] = useState('');
  const [showNoteForm, setShowNoteForm] = useState<string | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [goalDetails, setGoalDetails] = useState<Goal | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    loadGoals();
  }, []);

  useEffect(() => {
    // Загружаем заметки для всех целей при загрузке компонента
    if (goals.length > 0) {
      goals.forEach(goal => {
        loadNotesForGoal(goal.id);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goals]);

  const loadGoals = async () => {
    try {
      setLoading(true);
      const data = await goalsApi.getGoalsApiV1GoalsGet({});
      setGoals(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки целей');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingGoal) {
        await goalsApi.updateGoalApiV1GoalsGoalIdPut({
          goalId: editingGoal.id,
          goalUpdate: formData as GoalUpdate
        });
      } else {
        await goalsApi.createGoalApiV1GoalsPost({
          goalCreate: formData as GoalCreate
        });
      }
      setShowForm(false);
      setEditingGoal(null);
      setFormData({});
      loadGoals();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка сохранения цели');
    }
  };

  const handleEdit = (goal: Goal) => {
    setEditingGoal(goal);
    setFormData({ 
      itemId: goal.itemId,
      goalType: goal.goalType,
      targetCount: goal.targetCount,
      period: goal.period
    });
    setShowForm(true);
  };

  const handleDelete = async (goalId: string) => {
    if (!confirm('Вы уверены, что хотите удалить эту цель?')) return;
    try {
      await goalsApi.deleteGoalApiV1GoalsGoalIdDelete({ goalId });
      loadGoals();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка удаления цели');
    }
  };

  const handleMark = async (goalId: string) => {
    try {
      await goalsApi.markGoalCompletedApiV1GoalsGoalIdMarkPost({ goalId });
      loadGoals();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка отметки цели');
    }
  };

  const loadNotesForGoal = async (goalId: string) => {
    try {
      const data = await notesApi.getNotes(goalId);
      setNotes(prev => ({
        ...prev,
        [goalId]: Array.isArray(data) ? data : []
      }));
    } catch (err) {
      console.error('Ошибка загрузки заметок:', err);
    }
  };

  const toggleNotes = (goalId: string) => {
    setExpandedGoals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(goalId)) {
        newSet.delete(goalId);
      } else {
        newSet.add(goalId);
        if (!notes[goalId]) {
          loadNotesForGoal(goalId);
        }
      }
      return newSet;
    });
  };

  const handleCreateNote = async (goalId: string) => {
    if (!noteContent.trim()) {
      setError('Заметка не может быть пустой');
      return;
    }
    try {
      const newNote = await notesApi.createNote(goalId, noteContent);
      
      // Обновляем локальное состояние сразу для мгновенного отклика UI
      setNotes(prev => {
        const updatedNotes = { ...prev };
        const content = noteContent.trim();
        
        // Добавляем новую заметку в массив для данной цели
        if (updatedNotes[goalId]) {
          // Если заметка создана успешно и сервер вернул объект, добавляем его
          if (newNote && typeof newNote === 'object' && !Array.isArray(newNote) && 'id' in newNote) {
            updatedNotes[goalId] = [newNote as GoalNote, ...updatedNotes[goalId]];
          } else {
            // Если сервер не вернул объект, создаем временную заметку (будет обновлена при следующей загрузке)
            const tempNote: GoalNote = {
              id: Date.now(), // Временный ID
              userId: 0,
              goalId: goalId, // Используем строковый goalId
              content: content,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            };
            updatedNotes[goalId] = [tempNote, ...updatedNotes[goalId]];
          }
        } else {
          // Если массива заметок для этой цели еще нет, создаем его
          if (newNote && typeof newNote === 'object' && !Array.isArray(newNote) && 'id' in newNote) {
            updatedNotes[goalId] = [newNote as GoalNote];
          } else {
            const tempNote: GoalNote = {
              id: Date.now(),
              userId: 0,
              goalId: goalId, // Используем строковый goalId
              content: content,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            };
            updatedNotes[goalId] = [tempNote];
          }
        }
        
        return updatedNotes;
      });
      
      setNoteContent('');
      setShowNoteForm(null);
      setError(null);
      
      // Перезагружаем заметки с сервера для получения правильного ID и дат
      loadNotesForGoal(goalId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ошибка создания заметки';
      setError(errorMessage);
      console.error('Ошибка создания заметки:', err);
    }
  };

  const handleEditNote = (note: GoalNote) => {
    setEditingNote(note);
    setNoteContent(note.content);
    setShowNoteForm(null);
  };

  const handleUpdateNote = async () => {
    if (!editingNote || !noteContent.trim()) return;
    try {
      const updatedNote = await notesApi.updateNote(editingNote.id, noteContent);
      
      // Находим goal по note.goalId и используем goal.id как ключ
      const goal = goals.find(g => g.id === editingNote.goalId);
      
      // Обновляем локальное состояние сразу для мгновенного отклика UI
      setNotes(prev => {
        const updatedNotes = { ...prev };
        
        if (goal) {
          // Используем goal.id как ключ
          const goalIdKey = goal.id;
          if (updatedNotes[goalIdKey]) {
            updatedNotes[goalIdKey] = updatedNotes[goalIdKey].map(n => 
              n.id === editingNote.id 
                ? (updatedNote && typeof updatedNote === 'object' && !Array.isArray(updatedNote) 
                    ? { ...updatedNote } 
                    : { ...n, content: noteContent, updatedAt: new Date().toISOString() })
                : n
            );
          }
        } else {
          // Если не нашли goal, ищем заметку во всех массивах
          Object.keys(updatedNotes).forEach(key => {
            const notesArray = updatedNotes[key];
            if (Array.isArray(notesArray)) {
              const hasNote = notesArray.some(n => n.id === editingNote.id);
              if (hasNote) {
                updatedNotes[key] = notesArray.map(n => 
                  n.id === editingNote.id 
                    ? (updatedNote && typeof updatedNote === 'object' && !Array.isArray(updatedNote)
                        ? { ...updatedNote }
                        : { ...n, content: noteContent, updatedAt: new Date().toISOString() })
                    : n
                );
              }
            }
          });
        }
        
        return updatedNotes;
      });
      
      setEditingNote(null);
      setNoteContent('');
      
      // Перезагружаем заметки для получения актуальных данных
      if (goal) {
        loadNotesForGoal(goal.id);
      } else if (editingNote) {
        loadNotesForGoal(editingNote.goalId);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка обновления заметки');
    }
  };

  const handleDeleteNote = async (note: GoalNote) => {
    if (!confirm('Вы уверены, что хотите удалить эту заметку?')) return;
    try {
      await notesApi.deleteNote(note.id);
      
      // Закрываем форму редактирования, если удаляемая заметка была в процессе редактирования
      if (editingNote && editingNote.id === note.id) {
        setEditingNote(null);
        setNoteContent('');
      }
      
      // Обновляем локальное состояние сразу для мгновенного отклика UI
      // Находим goal по note.goalId
      const goal = goals.find(g => g.id === note.goalId);
      
      setNotes(prev => {
        const updatedNotes = { ...prev };
        
        if (goal) {
          // Используем goal.id как ключ
          const goalIdKey = goal.id;
          if (updatedNotes[goalIdKey]) {
            updatedNotes[goalIdKey] = updatedNotes[goalIdKey].filter(n => n.id !== note.id);
          }
        } else {
          // Если не нашли goal, ищем заметку во всех массивах
          Object.keys(updatedNotes).forEach(key => {
            const notesArray = updatedNotes[key];
            if (Array.isArray(notesArray) && notesArray.some(n => n.id === note.id)) {
              updatedNotes[key] = notesArray.filter(n => n.id !== note.id);
            }
          });
        }
        
        return updatedNotes;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка удаления заметки');
    }
  };

  const cancelNoteEdit = () => {
    setEditingNote(null);
    setNoteContent('');
    setShowNoteForm(null);
  };

  const handleShowDetails = async (goalId: string) => {
    try {
      setLoadingDetails(true);
      setError(null);
      const details = await goalsApi.getGoalApiV1GoalsGoalIdGet({ goalId });
      setGoalDetails(details);
      setShowDetailsModal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки деталей цели');
    } finally {
      setLoadingDetails(false);
    }
  };

  const handleCloseDetails = () => {
    setShowDetailsModal(false);
    setGoalDetails(null);
  };

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="goals">
      <div className="page-header">
        <h1>Цели</h1>
        <button onClick={() => { setShowForm(true); setEditingGoal(null); setFormData({}); }}>
          Создать цель
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingGoal ? 'Редактировать цель' : 'Создать цель'}</h2>
            <form onSubmit={handleSubmit}>
              {editingGoal && (
                <div className="form-group">
                  <label>ID цели:</label>
                  <input
                    type="text"
                    value={editingGoal.id}
                    readOnly
                    className="readonly-input"
                  />
                </div>
              )}
              <div className="form-group">
                <label>Item ID:</label>
                <input
                  type="text"
                  value={formData.itemId || ''}
                  onChange={(e) => setFormData({ ...formData, itemId: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Тип цели:</label>
                <select
                  value={formData.goalType || ''}
                  onChange={(e) => setFormData({ ...formData, goalType: e.target.value })}
                  required
                >
                  <option value="">Выберите тип</option>
                  <option value="daily">Ежедневная</option>
                  <option value="weekly">Еженедельная</option>
                  <option value="monthly">Ежемесячная</option>
                  <option value="custom">Пользовательская</option>
                </select>
              </div>
              <div className="form-group">
                <label>Целевое количество:</label>
                <input
                  type="number"
                  value={formData.targetCount || ''}
                  onChange={(e) => setFormData({ ...formData, targetCount: parseInt(e.target.value) || 0 })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Период:</label>
                <select
                  value={formData.period || ''}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  required
                >
                  <option value="">Выберите период</option>
                  <option value="day">День</option>
                  <option value="week">Неделя</option>
                  <option value="month">Месяц</option>
                  <option value="year">Год</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="submit">Сохранить</button>
                <button type="button" onClick={() => { setShowForm(false); setEditingGoal(null); }}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="goals-list">
        {goals.length === 0 ? (
          <p>Нет целей. Создайте первую цель.</p>
        ) : (
          goals.map((goal) => (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <h3>Цель #{goal.id.slice(0, 8)}</h3>
                <div className="goal-actions">
                  <button onClick={() => handleShowDetails(goal.id)} className="btn-details">Подробнее</button>
                  <button onClick={() => handleMark(goal.id)} className="btn-mark">
                    {goal.status === 'completed' ? '✓' : 'Отметить'}
                  </button>
                  <button onClick={() => handleEdit(goal)} className="btn-edit">Редактировать</button>
                  <button onClick={() => handleDelete(goal.id)} className="btn-delete">Удалить</button>
                </div>
              </div>
              <p>Тип: {goal.goalType}, Цель: {goal.targetCount}, Прогресс: {goal.progress}%</p>
              <p>Статус: {goal.status}</p>
              <small>Создано: {new Date(goal.createdAt).toLocaleDateString()}</small>
              
              <div className="notes-section">
                <div className="notes-header">
                  <button 
                    onClick={() => toggleNotes(goal.id)} 
                    className="btn-toggle-notes"
                  >
                    {expandedGoals.has(goal.id) ? '▼' : '▶'} Заметки ({notes[goal.id]?.length || 0})
                  </button>
                  {expandedGoals.has(goal.id) && !editingNote && (
                    <button 
                      onClick={() => {
                        setShowNoteForm(goal.id);
                        setEditingNote(null);
                        setNoteContent('');
                      }} 
                      className="btn-add-note"
                    >
                      + Добавить заметку
                    </button>
                  )}
                </div>

                {expandedGoals.has(goal.id) && (
                  <div className="notes-content">
                    {showNoteForm === goal.id && !editingNote && (
                      <div className="note-form">
                        <textarea
                          value={noteContent}
                          onChange={(e) => setNoteContent(e.target.value)}
                          placeholder="Введите текст заметки..."
                          rows={3}
                        />
                        <div className="note-form-actions">
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCreateNote(goal.id);
                            }} 
                            className="btn-save"
                          >
                            Сохранить
                          </button>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              cancelNoteEdit();
                            }} 
                            className="btn-cancel"
                          >
                            Отмена
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="notes-list">
                      {notes[goal.id] && notes[goal.id].length > 0 ? (
                        notes[goal.id].map((note) => {
                          // Если эта заметка редактируется, показываем форму редактирования
                          if (editingNote && editingNote.id === note.id && editingNote.goalId === goal.id) {
                            return (
                              <div key={note.id} className="note-item note-item-editing">
                                <div className="note-form">
                                  <textarea
                                    value={noteContent}
                                    onChange={(e) => setNoteContent(e.target.value)}
                                    placeholder="Введите текст заметки..."
                                    rows={3}
                                  />
                                  <div className="note-form-actions">
                                    <button onClick={handleUpdateNote} className="btn-save">
                                      Обновить
                                    </button>
                                    <button onClick={cancelNoteEdit} className="btn-cancel">
                                      Отмена
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          
                          // Иначе показываем обычное отображение заметки
                          return (
                            <div key={note.id} className="note-item">
                              <div className="note-content">{note.content}</div>
                              <div className="note-footer">
                                <small>{new Date(note.createdAt).toLocaleString()}</small>
                                <div className="note-actions">
                                  <button 
                                    onClick={() => handleEditNote(note)} 
                                    className="btn-note-edit"
                                    disabled={!!editingNote}
                                  >
                                    Редактировать
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteNote(note)} 
                                    className="btn-note-delete"
                                    disabled={!!editingNote}
                                  >
                                    Удалить
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        !showNoteForm && !editingNote && (
                          <p className="no-notes">Нет заметок. Добавьте первую заметку.</p>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {showDetailsModal && goalDetails && (
        <div className="modal">
          <div className="modal-content">
            <h2>Детали цели</h2>
            {loadingDetails ? (
              <div className="loading">Загрузка...</div>
            ) : (
              <div className="goal-details">
                <div className="detail-row">
                  <strong>ID:</strong>
                  <span>{goalDetails.id}</span>
                </div>
                <div className="detail-row">
                  <strong>ID пользователя:</strong>
                  <span>{goalDetails.userId}</span>
                </div>
                <div className="detail-row">
                  <strong>ID элемента:</strong>
                  <span>{goalDetails.itemId}</span>
                </div>
                <div className="detail-row">
                  <strong>Тип цели:</strong>
                  <span>{goalDetails.goalType}</span>
                </div>
                <div className="detail-row">
                  <strong>Целевое количество:</strong>
                  <span>{goalDetails.targetCount}</span>
                </div>
                <div className="detail-row">
                  <strong>Период:</strong>
                  <span>{goalDetails.period}</span>
                </div>
                <div className="detail-row">
                  <strong>Статус:</strong>
                  <span>{goalDetails.status}</span>
                </div>
                <div className="detail-row">
                  <strong>Прогресс:</strong>
                  <span>{goalDetails.progress}%</span>
                </div>
                <div className="detail-row">
                  <strong>Создано:</strong>
                  <span>{new Date(goalDetails.createdAt).toLocaleString()}</span>
                </div>
                <div className="detail-row">
                  <strong>Обновлено:</strong>
                  <span>{new Date(goalDetails.updatedAt).toLocaleString()}</span>
                </div>
              </div>
            )}
            <div className="form-actions">
              <button type="button" onClick={handleCloseDetails}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Goals;

