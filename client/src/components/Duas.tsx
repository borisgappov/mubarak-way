import { useState, useEffect } from 'react';
import { duasApi } from '../api/client';
import './Duas.css';

interface Dua {
  id: string;
  title?: string;
  text?: string;
  translation?: string;
  transliteration?: string;
}

function Duas() {
  const [duas, setDuas] = useState<Dua[]>([]);
  const [selectedDua, setSelectedDua] = useState<Dua | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadDuas();
  }, []);

  const loadDuas = async () => {
    try {
      setLoading(true);
      const data = await duasApi.getDuasApiV1DuasGet({});
      setDuas(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки дуа');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadDuas();
      return;
    }
    try {
      setLoading(true);
      const data = await duasApi.searchDuasApiV1DuasSearchGet({ q: searchQuery });
      setDuas(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка поиска дуа');
    } finally {
      setLoading(false);
    }
  };

  const handleDuaClick = async (duaId: string) => {
    try {
      const dua = await duasApi.getDuaApiV1DuasDuaIdGet({ duaId });
      setSelectedDua(dua);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки дуа');
    }
  };

  if (loading && duas.length === 0) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="duas">
      <div className="page-header">
        <h1>Дуа</h1>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="search-section">
        <input
          type="text"
          placeholder="Поиск дуа..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Поиск</button>
        {searchQuery && (
          <button onClick={() => { setSearchQuery(''); loadDuas(); }} className="clear-button">
            Очистить
          </button>
        )}
      </div>

      <div className="duas-container">
        <div className="duas-list">
          {duas.length === 0 ? (
            <p>Дуа не найдены</p>
          ) : (
            duas.map((dua) => (
              <div
                key={dua.id}
                className={`dua-item ${selectedDua?.id === dua.id ? 'active' : ''}`}
                onClick={() => handleDuaClick(dua.id)}
              >
                <h3>{dua.title || `Дуа #${dua.id}`}</h3>
                {dua.text && <p className="dua-preview">{dua.text.substring(0, 100)}...</p>}
              </div>
            ))
          )}
        </div>

        {selectedDua && (
          <div className="dua-detail">
            <button className="close-button" onClick={() => setSelectedDua(null)}>×</button>
            <h2>{selectedDua.title || `Дуа #${selectedDua.id}`}</h2>
            {selectedDua.text && (
              <div className="dua-section">
                <h3>Текст:</h3>
                <p className="dua-text">{selectedDua.text}</p>
              </div>
            )}
            {selectedDua.transliteration && (
              <div className="dua-section">
                <h3>Транслитерация:</h3>
                <p className="dua-transliteration">{selectedDua.transliteration}</p>
              </div>
            )}
            {selectedDua.translation && (
              <div className="dua-section">
                <h3>Перевод:</h3>
                <p className="dua-translation">{selectedDua.translation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Duas;

