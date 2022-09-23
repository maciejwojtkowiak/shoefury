import React, { Fragment } from "react";

import Hero from "components/hero/Hero";
import Products from "components/products/Products";

const MainPage = (): JSX.Element => {
  return (
    <Fragment>
      <Hero />
      <Products />
    </Fragment>
  );
};

export default MainPage;
