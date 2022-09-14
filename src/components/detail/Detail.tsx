import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Paths } from "config/Paths";
import { RootState } from "store/store";

import Navbar from "components/navbar/Navbar";

import ProductDetail from "./productDetail/ProductDetail";

const Detail = (): JSX.Element => {
  const products = useSelector(
    (state: RootState) => state.productsReducer.products,
  );
  const { id } = useParams();
  const detailedProduct = useMemo(() => {
    return products.find((product) => product._id === id);
  }, []);

  if (!detailedProduct) return <Navigate to={Paths.HOME} />;
  return (
    <React.Fragment>
      {detailedProduct && (
        <>
          <Navbar />

          <ProductDetail product={detailedProduct} />
        </>
      )}
    </React.Fragment>
  );
};

export default Detail;
