import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProductPage from './pages/AddProductPage';
import MainPage from './pages/MainPage';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-product" element={<AddProductPage />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
