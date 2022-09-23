import React from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../svg/LogoIcon";

const Logo = (): JSX.Element => {
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
