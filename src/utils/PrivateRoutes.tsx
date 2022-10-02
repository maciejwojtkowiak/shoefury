import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "../store/store";

export const PrivateRoutes = (): JSX.Element => {
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  if (!isAuth) return <Navigate to="/" />;
  return <Outlet />;
};

export const IsUnAuthRoutes = (): JSX.Element => {
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};

export {};
