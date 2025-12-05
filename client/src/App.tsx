import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Goals from './components/Goals';
import Duas from './components/Duas';
import AllahNames from './components/AllahNames';
import Statistics from './components/Statistics';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav">
          <Link to="/goals" className="nav-link">Цели</Link>
          <Link to="/duas" className="nav-link">Дуа</Link>
          <Link to="/allah-names" className="nav-link">Имена Аллаха</Link>
          <Link to="/statistics" className="nav-link">Статистика</Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Goals />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/duas" element={<Duas />} />
            <Route path="/allah-names" element={<AllahNames />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
