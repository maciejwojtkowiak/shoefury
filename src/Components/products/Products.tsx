import React, { Fragment, useCallback, useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AxiosError } from "axios";
import { fetchProducts } from "store/products-actions";
import { AppDispatch, RootState } from "store/store";
import { decodeBase64 } from "utils/decodeBase64";

import ErrorComponent from "components/errors/ErrorComponent";

import ProductItem from "./ProductItem";

const Products = (): JSX.Element => {
  const dispatch = useDispatch() as AppDispatch;
  const products = useSelector(
    (state: RootState) => state.productsReducer.products,
  );
  const pageCount = useSelector(
    (state: RootState) => state.productsReducer.pageNum,
  );
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [isAtMaxPage, setIsAtMaxPage] = useState(false);
  const [isAtMinPage, setIsAtMinPage] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const loadProducts = useCallback(async () => {
    try {
      await dispatch(fetchProducts(page));
      const pagesCount = pageCount;
      setPagesCount(pagesCount);
      setError(null);
    } catch (error) {
      setError(error as AxiosError);
    }
  }, [page]);
  useEffect(() => {
    void loadProducts();
  }, [loadProducts, page]);

  const moveForward = (): void => {
    setPage((prevPage) => ++prevPage);
  };

  const moveBack = (): void => {
    setPage((prevPage) => --prevPage);
  };

  useEffect(() => {
    setIsAtMaxPage(page === pagesCount);
    setIsAtMinPage(page === 1);
  }, [page, pagesCount, setIsAtMaxPage, setIsAtMinPage]);

  const isAtLimitPageAttr = {
    disabled: true,
  };
  console.log("PRODUCTS", products);

  return (
    <Fragment>
      <div className="w-full grid place-items-center mt-24">
        <div className=" w-[1800px] h-[1400px]  grid  grid-cols-3 grid-rows-3 place-items-center gap-16">
          {error != null ? (
            <ErrorComponent
              status={error.status ?? "500"}
              message={error.message}
              tryAgain={true}
              FetchFunction={() => loadProducts}
            />
          ) : (
            <Fragment>
              {products.map((product) => (
                <ProductItem
                  key={product.title}
                  title={product.title}
                  imageData={decodeBase64(product.imageData)}
                  price={product.price}
                  id={product._id}
                />
              ))}
            </Fragment>
          )}
        </div>
        <div className="w-full flex justify-center items-center pt-24 pb-12 ">
          <button onClick={moveBack} {...(isAtMinPage && isAtLimitPageAttr)}>
            <MdArrowBackIos size={48} color={isAtMinPage ? "gray" : "black"} />
          </button>
          {page}
          <button onClick={moveForward} {...(isAtMaxPage && isAtLimitPageAttr)}>
            <MdArrowForwardIos
              size={48}
              color={isAtMaxPage ? "gray" : "black "}
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
