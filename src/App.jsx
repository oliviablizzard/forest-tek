import './App.scss'
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './pages/NotFound/NotFound';
import Data from './pages/Data/Data';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<Data />} />
        <Route path="/programs/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
