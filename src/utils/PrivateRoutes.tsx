// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";
// import config from "config/config.json";

// import { RootState } from "../store/store";
// import { userAction } from "../store/user-slice";

// export const IsAuthRoutes = (): JSX.Element => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const dispatch = useDispatch();
//   const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
//   // useEffect(() => {
//   //   const isAuth = async (): Promise<void> => {
//   //     const token = localStorage.getItem("token") ?? "";
//   //     const response = await fetch(`${config.backendDomain}/auth/is-auth`, {
//   //       method: "PATCH",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });
//   //     console.log("RESPONSE", response);
//   //     const data = await response.json();
//   //     dispatch(userAction.setIsAuth(data.isAuth));
//   //     setIsLoading(false);
//   //   };
//   //   try {
//   //     void isAuth();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }, [dispatch]);

//   useEffect(() => {
//     setIsLoaded(!isLoading && isAuth);
//   }, [isAuth, isLoading]);

//   if (isLoaded) return <Outlet />;
//   if (!isLoading && !isAuth) return <Navigate to="/" />;
//   return <div>Loading</div>;
// };

// export const IsUnAuthRoutes = (): JSX.Element => {
//   const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
//   return !isAuth ? <Outlet /> : <Navigate to="/" />;
// };

export {};
