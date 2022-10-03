import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Paths } from "config/Paths";

import { RootState } from "../../store/store";
import CartIcon from "../svg/CartIcon";

const RightSideNavbar = (): JSX.Element => {
  const onLogout = (): void => {
    localStorage.removeItem("token");
  };
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return (
    <div className="place-self-end flex gap-4 h-full items-center justify-center">
      <li className="relative">
        <Link to={Paths.CART}>
          <CartIcon />
        </Link>
      </li>
      <li>
        <Link to={Paths.ADDPRODUCT}>Add product</Link>
      </li>
      <li>
        <Link to={Paths.ADDPRODUCT}>Add special offer</Link>
      </li>
      <li className="mr-4">
        {!isAuth ? (
          <div className="flex gap-4">
            <Link to={Paths.REGISTER}>Register</Link>
            <Link to={Paths.LOGIN}>Login</Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <button>Profile</button>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
      </li>
    </div>
  );
};

export default RightSideNavbar;
