import React, { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Paths } from "config/paths";
import { useAppDispatch, useAppSelector } from "store/hooks/reduxHooks";
import { productsAction } from "store/products/products-slice";
import { RootState } from "store/store";

import ProductDetail from "./productDetail/ProductDetail";

const Detail = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.productsReducer.products,
  );
  const { id } = useParams();
  const detailedProduct = useMemo(() => {
    return products.find((product) => product._id === id);
  }, []);
  if (!detailedProduct) return <Navigate to={Paths.HOME} />;

  dispatch(productsAction.setChosenProduct(detailedProduct));

  return (
    <React.Fragment>
      {detailedProduct && (
        <>
          <ProductDetail product={detailedProduct} />
        </>
      )}
    </React.Fragment>
  );
};

export default Detail;
