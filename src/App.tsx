import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { config } from "config/config";
import { Paths } from "config/paths";
import DetailPage from "pages/DetailPage";
import { useAppDispatch, useAppSelector } from "store/hooks/reduxHooks";
import { PrivateRoutes } from "utils/PrivateRoutes";

import Navbar from "components/navbar/Navbar";
import OrderSuccess from "components/order/OrderSuccess";
import Notification from "components/ui/notification/Notification";

import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import { checkAuthentication } from "./services/authApi/checkIsAuth";
import { userAction } from "./store/user/user-slice";
import { ICheckAuthResponse } from "./types/api/ApiResponse";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const notificationIsShown = useAppSelector(
    (state) => state.notificationReducer.isShown,
  );
  // TO DO: Move to axios
  useEffect(() => {
    const isAuth = async (): Promise<void> => {
      const data = (await checkAuthentication(
        localStorage.getItem("token") ?? "",
      )) as ICheckAuthResponse;
      dispatch(userAction.setIsAuth(data.isAuth));
    };
    try {
      void isAuth();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {}, config.notificationDuration);
    return () => clearTimeout(timeout);
  }, [notificationIsShown]);

  return (
    <div className="relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={Paths.ADDPRODUCT} element={<AddProductPage />} />
            <Route path={Paths.CART} element={<CartPage />} />
          </Route>
          <Route path={Paths.HOME} element={<MainPage />} />
          <Route path={Paths.REGISTER} element={<Register />} />
          <Route path={`${Paths.PRODUCT}/:id`} element={<DetailPage />} />
          <Route path={Paths.LOGIN} element={<LoginPage />} />
          <Route path={Paths.SUCCESS} element={<OrderSuccess />} />
        </Routes>
        {notificationIsShown ? <Notification /> : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
