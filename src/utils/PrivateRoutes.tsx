import { Outlet, Navigate } from 'react-router-dom';
import config from '../config.json';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from '../store/user-slice';

export const IsAuthRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  useEffect(() => {
    const isAuth = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`${config.backendDomain}/auth/is-auth`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      const data = await response.json();
      dispatch(userAction.setIsAuth(data.isAuth));
      setIsLoading(false);
    };
    isAuth();
  }, [dispatch]);

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
