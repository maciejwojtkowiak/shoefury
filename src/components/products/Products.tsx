import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AxiosError } from "axios";
import { fetchProducts } from "store/products/thunks";
import { AppDispatch, RootState } from "store/store";
import { decodeBase64 } from "utils/decodeBase64";

import ErrorComponent from "components/errors/ErrorComponent";
import ModalPortal from "components/ui/modal/ModalPortal";
import { useModal } from "components/ui/modal/use-modal";

import ProductsNavigation from "./navigation/ProductsNavigation";
import ProductItem from "./ProductItem";

const Products = (): JSX.Element => {
  const dispatch = useDispatch() as AppDispatch;
  const products = useSelector(
    (state: RootState) => state.productsReducer.products,
  );
  // const pageCount = useSelector(
  //   (state: RootState) => state.productsReducer.pageNum,
  // );
  const pageCount = 6;

  const [actualPage, setActualPage] = useState(1);
  const [isAtMaxPage, setIsAtMaxPage] = useState(false);
  const [isAtMinPage, setIsAtMinPage] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const loadProducts = (): void => {
    const getProducts = async (): Promise<void> => {
      console.log(actualPage);
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

  const modal = useModal();
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
      <ModalPortal
        modalIsShown={modal.modalIsShown}
        showHandler={modal.showHandler}
        hideHandler={modal.hideHandler}
      >
        <div className="w-[900px] h-[1000px]">HEJ HEJ</div>
      </ModalPortal>
    </Fragment>
  );
};

export default Products;
