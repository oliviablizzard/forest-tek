import './App.scss'
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ToolPage from './pages/ToolPage/ToolPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tools" element={<ToolPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
