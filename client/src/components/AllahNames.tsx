import { useState, useEffect } from 'react';
import { allahNamesApi } from '../api/client';
import type { AllahName } from '../generated/models';
import './AllahNames.css';

function AllahNames() {
  const [names, setNames] = useState<AllahName[]>([]);
  const [selectedName, setSelectedName] = useState<AllahName | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [randomName, setRandomName] = useState<AllahName | null>(null);

  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = async () => {
    try {
      setLoading(true);
      const response = await allahNamesApi.listAllahNamesApiV1AllahNamesGet({});
      setNames(response.items || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки имен');
    } finally {
      setLoading(false);
    }
  };

  const handleNameClick = async (contentId: string) => {
    try {
      const response = await allahNamesApi.getAllahNameByIdApiV1AllahNamesContentIdGet({ contentId });
      setSelectedName(response);
      // Отмечаем как просмотренное
      await allahNamesApi.markNameAsViewedApiV1AllahNamesContentIdViewPost({ contentId });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки имени');
    }
  };

  const handleGetRandom = async () => {
    try {
      const response = await allahNamesApi.getRandomAllahNameApiV1AllahNamesRandomGet();
      setRandomName(response);
      setSelectedName(response);
      if (response.id) {
        await allahNamesApi.markNameAsViewedApiV1AllahNamesContentIdViewPost({ contentId: response.id });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки случайного имени');
    }
  };

  const handleMarkLearned = async (contentId: string) => {
    try {
      await allahNamesApi.markNameAsLearnedApiV1AllahNamesContentIdMarkLearnedPost({ contentId });
      if (selectedName?.id === contentId) {
        loadNames();
        const response = await allahNamesApi.getAllahNameByIdApiV1AllahNamesContentIdGet({ contentId });
        setSelectedName(response);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка отметки имени');
    }
  };

  const handleUnmarkLearned = async (contentId: string) => {
    try {
      await allahNamesApi.unmarkNameAsLearnedApiV1AllahNamesContentIdUnmarkLearnedPost({ contentId });
      if (selectedName?.id === contentId) {
        loadNames();
        const response = await allahNamesApi.getAllahNameByIdApiV1AllahNamesContentIdGet({ contentId });
        setSelectedName(response);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка снятия отметки');
    }
  };

  if (loading && names.length === 0) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="allah-names">
      <div className="page-header">
        <h1>Имена Аллаха</h1>
        <button onClick={handleGetRandom} className="random-button">
          Случайное имя
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="names-container">
        <div className="names-list">
          {names.length === 0 ? (
            <p>Имена не найдены</p>
          ) : (
            names.map((name) => (
              <div
                key={name.id}
                className={`name-item ${selectedName?.id === name.id ? 'active' : ''}`}
                onClick={() => name.id && handleNameClick(name.id)}
              >
                <div className="name-number">{name.number}</div>
                <div className="name-info">
                  <h3>{name.nameArabic}</h3>
                  {name.nameLatin && <p className="name-transliteration">{name.nameLatin}</p>}
                </div>
              </div>
            ))
          )}
        </div>

        {selectedName && (
          <div className="name-detail">
            <button className="close-button" onClick={() => setSelectedName(null)}>×</button>
            <div className="name-header">
              <div className="name-number-large">{selectedName.number}</div>
              <div>
                <h2 className="name-arabic">{selectedName.nameArabic}</h2>
                {selectedName.nameLatin && <p className="name-transliteration-large">{selectedName.nameLatin}</p>}
              </div>
            </div>
            
            {selectedName.translations && selectedName.translations.length > 0 && (
              <div className="name-section">
                <h3>Перевод:</h3>
                {selectedName.translations.map((translation, index) => (
                  <p key={index} className="name-translation">{translation}</p>
                ))}
              </div>
            )}

            {selectedName.notes && selectedName.notes.length > 0 && (
              <div className="name-section">
                <h3>Заметки:</h3>
                {selectedName.notes.map((note, index) => (
                  <p key={index} className="name-description">{note}</p>
                ))}
              </div>
            )}

            <div className="name-actions">
              {selectedName.id && (
                <>
                  {selectedName.properties?.learned ? (
                    <button
                      onClick={() => selectedName.id && handleUnmarkLearned(selectedName.id)}
                      className="btn-unmark"
                    >
                      Снять отметку "Изучено"
                    </button>
                  ) : (
                    <button
                      onClick={() => selectedName.id && handleMarkLearned(selectedName.id)}
                      className="btn-mark"
                    >
                      Отметить как изученное
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllahNames;

