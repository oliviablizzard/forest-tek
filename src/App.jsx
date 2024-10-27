import './App.scss'
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';
import Data from './pages/Data/Data';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <Route path="/home" element={<HomePage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/tools" element={<ToolPage />} />
<Route path="/directory" element={<DirectoryPage />} /> */}