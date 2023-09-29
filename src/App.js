import './App.css';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
