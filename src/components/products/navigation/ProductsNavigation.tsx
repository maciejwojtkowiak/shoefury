import React, { useEffect, useState } from "react";
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
const PAGES_AHEAD = 2;

const ProductsNavigation = ({
  actualPage,
  isAtMaxPage,
  isAtMinPage,
  moveBack,
  moveForward,
  moveToPage,
  pageCount,
}: ProductNavigationProps): JSX.Element => {
  const [forwardDifference, setForwardDifference] = useState(0);
  const [backwardDifference, setBackwardDifference] = useState(0);
  const [multipleForward, setMultipleForward] = useState(false);
  const [multipleBackward, setMultipleBackward] = useState(false);

  const pagesCalc = (pageMinuend: number, pageSubtrahend: number): number => {
    if (pageMinuend - pageSubtrahend === 0) return 0;
    if (pageMinuend - pageSubtrahend === 1) return 0;
    if (pageMinuend - pageSubtrahend === 2) return 1;
    return PAGES_AHEAD;
  };
  const isAtLimitPageAttr = {
    disabled: true,
  };

  useEffect(() => {
    setForwardDifference(pagesCalc(pageCount, actualPage));
    setBackwardDifference(pagesCalc(actualPage, FIRST_PAGE));
    setMultipleForward(pageCount - actualPage > PAGES_AHEAD + 1);
    setMultipleBackward(actualPage - FIRST_PAGE > PAGES_AHEAD + 1);
  }, [actualPage]);

  return (
    <div className="w-full flex justify-center items-center pt-24 pb-12 ">
      <button onClick={moveBack} {...(isAtMinPage && isAtLimitPageAttr)}>
        <MdArrowBackIos size={48} color={isAtMinPage ? "gray" : "black"} />
      </button>
      {FIRST_PAGE !== actualPage ? (
        <PageIndicator page={FIRST_PAGE} moveToPage={moveToPage} />
      ) : null}
      {multipleBackward && "..."}
      {Array.apply(null, Array(backwardDifference)).map((_, index) => {
        return (
          <PageIndicator
            page={actualPage + index - 1 * backwardDifference}
            key={index}
            moveToPage={moveToPage}
          />
        );
      })}
      <PageIndicator page={actualPage} moveToPage={moveToPage} actual={true} />
      {Array.apply(null, Array(forwardDifference)).map((_, index) => {
        return (
          <PageIndicator
            page={actualPage + index + 1}
            key={index}
            moveToPage={moveToPage}
          />
        );
      })}
      {multipleForward && "..."}
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
