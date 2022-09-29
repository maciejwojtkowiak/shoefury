import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import PageIndicator from "./PageIndicator";

interface ProductNavigationProps {
  actualPage: number;
  pageCount: number;
  isAtMaxPage: boolean;
  isAtMinPage: boolean;
  moveBack: () => void;
  moveForward: () => void;
  moveToPage: (page: number) => void;
}

const FIRST_PAGE = 1;

const ProductsNavigation = ({
  actualPage,
  isAtMaxPage,
  isAtMinPage,
  moveBack,
  moveForward,
  moveToPage,
  pageCount,
}: ProductNavigationProps): JSX.Element => {
  const isAtLimitPageAttr = {
    disabled: true,
  };
  return (
    <div className="w-full flex justify-center items-center pt-24 pb-12 ">
      <button onClick={moveBack} {...(isAtMinPage && isAtLimitPageAttr)}>
        <MdArrowBackIos size={48} color={isAtMinPage ? "gray" : "black"} />
      </button>
      {FIRST_PAGE !== actualPage ? (
        <PageIndicator page={FIRST_PAGE} moveToPage={moveToPage} />
      ) : null}
      <PageIndicator page={actualPage} moveToPage={moveToPage} actual={true} />
      {pageCount !== actualPage ? (
        <PageIndicator page={pageCount} moveToPage={moveToPage} />
      ) : null}
      <button onClick={moveForward} {...(isAtMaxPage && isAtLimitPageAttr)}>
        <MdArrowForwardIos size={48} color={isAtMaxPage ? "gray" : "black "} />
      </button>
    </div>
  );
};

export default ProductsNavigation;
