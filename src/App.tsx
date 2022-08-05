import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProductPage from './pages/AddProductPage';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userAction } from './store/user-slice';
import { IsUnAuthRoutes } from './utils/PrivateRoutes';
import { checkIsAuth } from './utils/checkIsAuth';
import CartPage from './pages/CartPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.setIsAuth(localStorage.getItem('token')));
  }, [dispatch]);
  useEffect(() => {
    const checkAuth = async () => {
      console.log(await checkIsAuth());
    };
    checkAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<IsUnAuthRoutes />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
