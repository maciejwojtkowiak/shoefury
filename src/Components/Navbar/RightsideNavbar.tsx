import CartIcon from '../svg/CartIcon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Fragment } from 'react';

const RightSideNavbar = () => {
  const onLogout = () => {
    localStorage.removeItem('token');
  };
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return (
    <div className="place-self-end flex gap-4 h-full items-center justify-center">
      <li className="relative">
        <Link to="/cart">
          <CartIcon />
        </Link>
      </li>
      <li>
        <Link to="/add-product">Add product</Link>
      </li>
      <li>
        <Link to="/add-product">Add special offer</Link>
      </li>
      <li className="mr-4">
        {!isAuth ? (
          <div className="flex gap-4">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        ) : (
          <form>
            <button onClick={onLogout}>Logout</button>
          </form>
        )}
      </li>
    </div>
  );
};

export default RightSideNavbar;
