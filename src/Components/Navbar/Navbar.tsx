import { HiLightningBolt } from 'react-icons/hi';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white border-b-2 drop-shadow w-full h-16 ">
      <ul className="text-black grid grid-cols-2 h-full items-center justify-center ">
        <div className="flex  items-center">
          <li className="ml-12">
            <HiLightningBolt color="#f97316" size={48} />
          </li>
          <li className=" font-bold">ShoeFury</li>
        </div>

        <div className="place-self-end flex gap-4 h-full items-center justify-center">
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#6dd5ed" offset="0%" />
              <stop stopColor="#2193b0" offset="100%" />
            </linearGradient>
          </svg>
          <li>
            <BsFillCartFill style={{fill: "url(#blue-gradient)"}} size={32} />
          </li>
          <li>
            <Link to="/add-product">Add product</Link>
          </li>
          <li className="mr-4">Register</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
