import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks/reduxHooks";
import { fetchProduct } from "store/products/thunks";

import ProductDetail from "./productDetail/ProductDetail";

const Detail = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const detailedProduct = useAppSelector(
    (state) => state.productsReducer.chosenProduct,
  );

  useEffect(() => {
    const getProd = async (): Promise<void> => {
      void dispatch(fetchProduct(id ?? ""));
    };
    void getProd();
  }, []);
  console.log("DETAILED", detailedProduct);

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
