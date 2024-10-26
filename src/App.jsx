import './App.scss'
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <Route path="/home" element={<HomePage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/tools" element={<ToolPage />} />
<Route path="/directory" element={<DirectoryPage />} /> */}