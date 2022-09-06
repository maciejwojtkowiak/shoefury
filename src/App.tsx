import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from "config/Paths";
import DetailPage from "pages/DetailPage";

import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import { checkAuthentication } from "./services/authApi/checkIsAuth";
import { userAction } from "./store/user-slice";
import { CheckAuthResponse } from "./types/ApiResponse";
import { IsAuthRoutes, IsUnAuthRoutes } from "./utils/PrivateRoutes";

import "./App.css";

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = async (): Promise<void> => {
      const data = (await checkAuthentication(
        localStorage.getItem("token"),
      )) as CheckAuthResponse;
      dispatch(userAction.setIsAuth(data.isAuth));
    };
    try {
      void isAuth();
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<MainPage />} />
        <Route element={<IsUnAuthRoutes />}>
          <Route path={Paths.REGISTER} element={<Register />} />
        </Route>
        <Route element={<IsAuthRoutes />}>
          <Route path={Paths.ADDPRODUCT} element={<AddProductPage />} />
          <Route path={Paths.CART} element={<CartPage />} />
        </Route>
        <Route path={`${Paths.PRODUCT}/:id`} element={<DetailPage />} />
        <Route path={Paths.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
