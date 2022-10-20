import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "config/paths";
import { useAppDispatch, useAppSelector } from "store/hooks/reduxHooks";
import { userAction } from "store/user/user-slice";

import Profile from "components/profile/Profile";
import ModalPortal from "components/ui/modal/ModalPortal";
import { useModal } from "components/ui/modal/use-modal";

import CartIcon from "../svg/CartIcon";

const RightSideNavbar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const onLogout = (): void => {
    localStorage.removeItem("token");
    dispatch(userAction.setIsAuth(false));
  };
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const modal = useModal();
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
            <button onClick={modal.showHandler}>Profile</button>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
      </li>
      <ModalPortal {...modal}>
        <Profile />
      </ModalPortal>
    </div>
  );
};

export default RightSideNavbar;
