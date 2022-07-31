import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const IsAuthRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export const IsUnAuthRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};
