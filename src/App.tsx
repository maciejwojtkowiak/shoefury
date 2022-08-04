import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProductPage from './pages/AddProductPage';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userAction } from './store/user-slice';
import { IsUnAuthRoutes } from './utils/PrivateRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.setIsAuth(localStorage.getItem('token')));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<IsUnAuthRoutes />}>
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
