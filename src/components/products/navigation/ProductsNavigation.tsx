import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface ProductNavigationProps {
  actualPage: number;
  isAtMaxPage: boolean;
  isAtMinPage: boolean;
  moveBack: () => void;
  moveForward: () => void;
}

const ProductsNavigation = ({
  actualPage,
  isAtMaxPage,
  isAtMinPage,
  moveBack,
  moveForward,
}: ProductNavigationProps): JSX.Element => {
  const isAtLimitPageAttr = {
    disabled: true,
  };
  return (
    <div className="w-full flex justify-center items-center pt-24 pb-12 ">
      <button onClick={moveBack} {...(isAtMinPage && isAtLimitPageAttr)}>
        <MdArrowBackIos size={48} color={isAtMinPage ? "gray" : "black"} />
      </button>
      {actualPage}
      <button onClick={moveForward} {...(isAtMaxPage && isAtLimitPageAttr)}>
        <MdArrowForwardIos size={48} color={isAtMaxPage ? "gray" : "black "} />
      </button>
    </div>
  );
};

export default ProductsNavigation;
