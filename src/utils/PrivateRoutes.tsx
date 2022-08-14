import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from '../store/user-slice';
import { checkAuthentication } from '../services/authApi/checkIsAuth';
import { CheckAuthResponse } from '../types/ApiResponse';

export const IsAuthRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch()
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth)
  useEffect(() => {
    const isAuth = async () => {
      const data = await checkAuthentication() as CheckAuthResponse
      console.log('DATA', data)
      dispatch(userAction.setIsAuth(data.isAuth))
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
