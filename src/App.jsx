import './App.scss';
import ProgramsPage from './pages/ProgramsPage/ProgramsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProgramsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
