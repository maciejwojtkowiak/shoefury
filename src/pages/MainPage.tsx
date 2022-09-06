import React, { Fragment } from "react";

import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import Products from "components/products/Products";

const MainPage = (): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Products />
    </Fragment>
  );
};

export default MainPage;
