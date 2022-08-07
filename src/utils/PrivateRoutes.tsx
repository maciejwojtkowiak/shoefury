import config from '../config.json';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const IsAuthRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const isAuth = async () => {
      const response = await fetch(`${config.backendDomain}/auth/is-auth`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      setIsAuth(data.isAuth);
      setIsLoading(false);
    };
    isAuth();
  }, []);

  useEffect(() => {
    setIsLoaded(!isLoading && isAuth);
  }, [isAuth, isLoading]);

  if (isLoaded) return <Outlet />;
  if (!isLoading && !isAuth) return <Navigate to="/" />;
  return <div>Loading</div>;
};

export const IsUnAuthRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};
