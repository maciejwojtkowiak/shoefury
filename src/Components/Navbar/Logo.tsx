import LogoIcon from '../svg/LogoIcon';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex  items-center">
        <li className="ml-12">
          <LogoIcon />
        </li>
        <li className=" font-bold">ShoeFury</li>
      </div>
    </Link>
  );
};

export default Logo;
