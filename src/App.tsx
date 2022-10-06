import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from "config/Paths";
import DetailPage from "pages/DetailPage";
import { PrivateRoutes } from "utils/PrivateRoutes";

import Navbar from "components/navbar/Navbar";
import Profile from "components/profile/Profile";

import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import { checkAuthentication } from "./services/authApi/checkIsAuth";
import { userAction } from "./store/user-slice";
import { ICheckAuthResponse } from "./types/ApiResponse";

import "./App.css";

function App(): JSX.Element {
  const dispatch = useDispatch();
  console.log("AUTH CHECK");
  // TO DO: Move to axios
  useEffect(() => {
    console.log("TOKEN APP ", localStorage.getItem("token"));
    const isAuth = async (): Promise<void> => {
      const data = (await checkAuthentication(
        localStorage.getItem("token") ?? "",
      )) as ICheckAuthResponse;
      console.log("DATA", data);
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
      <Navbar />
      <Profile />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={Paths.ADDPRODUCT} element={<AddProductPage />} />
          <Route path={Paths.CART} element={<CartPage />} />
        </Route>
        <Route path={Paths.HOME} element={<MainPage />} />
        <Route path={Paths.REGISTER} element={<Register />} />
        <Route path={`${Paths.PRODUCT}/:id`} element={<DetailPage />} />
        <Route path={Paths.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
