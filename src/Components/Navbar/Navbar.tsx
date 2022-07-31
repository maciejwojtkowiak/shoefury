import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import CartIcon from '../svg/CartIcon';
import LogoIcon from '../svg/LogoIcon';

const Navbar = () => {
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
  const onLogout = () => {
    localStorage.removeItem('token');
  };
  return (
    <div className="bg-white border-b-2 drop-shadow w-full h-16 ">
      <ul className="text-black grid grid-cols-2 h-full items-center justify-center ">
        <div className="flex  items-center">
          <li className="ml-12">
            <LogoIcon />
          </li>
          <li className=" font-bold">ShoeFury</li>
        </div>

        <div className="place-self-end flex gap-4 h-full items-center justify-center">
          <li>
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
                <button onClick={onLogout} type="submit">
                  Logout
                </button>
              </form>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
