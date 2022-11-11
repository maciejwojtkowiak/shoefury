import React, { Fragment, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useAppDispatch, useAppSelector } from "store/hooks/reduxHooks";
import { fetchProducts } from "store/products/thunks";
import { decodeBase64 } from "utils/decodeBase64";

import ErrorComponent from "components/errors/ErrorComponent";

import ProductsNavigation from "./navigation/ProductsNavigation";
import ProductItem from "./ProductItem";

const Products = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsReducer.products);
  const pageCount = 15;

  const [actualPage, setActualPage] = useState(1);
  const [isAtMaxPage, setIsAtMaxPage] = useState(false);
  const [isAtMinPage, setIsAtMinPage] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const loadProducts = (): void => {
    const getProducts = async (): Promise<void> => {
      await dispatch(fetchProducts(actualPage));
      setError(null);
    };
    try {
      void getProducts();
    } catch (error) {
      setError(error as AxiosError);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [actualPage]);

  const moveForward = (): void => {
    setActualPage((prevPage) => ++prevPage);
  };

  const moveBack = (): void => {
    setActualPage((prevPage) => --prevPage);
  };

  const moveToPage = (page: number): void => {
    setActualPage(page);
  };

  useEffect(() => {
    setIsAtMaxPage(actualPage === pageCount);
    setIsAtMinPage(actualPage === 1);
  }, [actualPage, pageCount, setIsAtMaxPage, setIsAtMinPage]);

  return (
    <Fragment>
      <div className="w-full grid place-items-center mt-24">
        <div className=" w-[1800px] h-[1400px]  grid  grid-cols-3 grid-rows-3 place-items-center gap-16">
          {error != null ? (
            <ErrorComponent
              status={error.status ?? "500"}
              message={error.message}
              tryAgain={true}
              FetchFunction={() => console.log("hej")}
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
        <ProductsNavigation
          actualPage={actualPage}
          isAtMinPage={isAtMinPage}
          isAtMaxPage={isAtMaxPage}
          moveBack={moveBack}
          moveForward={moveForward}
          moveToPage={moveToPage}
          pageCount={pageCount}
        />
      </div>
    </Fragment>
  );
};

export default Products;
