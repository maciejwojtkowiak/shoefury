import config from '../config.json';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const IsAuthRoutes = () => {
  useEffect(() => {
    fetch(`${config.backendDomain}/auth/is-auth`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    console.log('IsAuth');
  }, []);
  console.log('IsAuth');

  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export const IsUnAuthRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};
