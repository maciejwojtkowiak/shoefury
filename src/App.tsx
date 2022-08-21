import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProductPage from './pages/AddProductPage';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userAction } from './store/user-slice';
import { IsAuthRoutes, IsUnAuthRoutes } from './utils/PrivateRoutes';
import CartPage from './pages/CartPage';
import { checkAuthentication } from './services/authApi/checkIsAuth';
import { CheckAuthResponse } from './types/ApiResponse';
import LoginPage from './pages/LoginPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = async () => {
      const data = (await checkAuthentication(
        localStorage.getItem('token')
      )) as CheckAuthResponse;
      dispatch(userAction.setIsAuth(data.isAuth));
    };
    isAuth();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<IsUnAuthRoutes />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<IsAuthRoutes />}>
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
