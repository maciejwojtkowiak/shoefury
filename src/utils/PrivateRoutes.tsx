import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks/reduxHooks";

import { RootState } from "../store/store";

export const PrivateRoutes = (): JSX.Element => {
  const isAuth = useAppSelector((state: RootState) => state.userReducer.isAuth);
  if (!isAuth) return <Navigate to="/" />;
  return <Outlet />;
};

export const IsUnAuthRoutes = (): JSX.Element => {
  const isAuth = useAppSelector((state: RootState) => state.userReducer.isAuth);
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};

export {};
