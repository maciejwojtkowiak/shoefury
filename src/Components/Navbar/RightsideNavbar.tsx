import CartIcon from '../svg/CartIcon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const RightSideNavbar = () => {
  const onLogout = () => {
    localStorage.removeItem('token');
  };
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  return (
    <div className="place-self-end flex gap-4 h-full items-center justify-center">
      <li className="relative">
        <CartIcon />
      </li>
      <li>
        <Link to="/add-product">Add product</Link>
      </li>
      <li className="mr-4">
        {!isAuth ? (
          <Link to="/register">Register</Link>
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
