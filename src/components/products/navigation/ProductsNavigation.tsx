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
const PAGES_FORWARD = 2;
const PAGES_BACK = 2;

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
  const [forwardDifference, setForwardDifference] = useState(0);
  const [multiplePagesForward, setMultiplePagesForward] = useState(false);
  const [multiplePagesBack, setMultiplePagesBack] = useState(false);
  const [twoPagesForward, setTwoPagesForward] = useState(false);
  const [twoPagesBack, setTwoPagesBack] = useState(false);
  // zrob helpera
  const forwardPagesCalc = (): number => {
    if (pageCount - actualPage === 0) return 0;
    if (pageCount - actualPage === 1) return 0;
    if (pageCount - actualPage === 2) return 1;
    return 2;
  };

  useEffect(() => {
    setForwardDifference(forwardPagesCalc());
    actualPage + PAGES_FORWARD <= pageCount
      ? setTwoPagesForward(true)
      : setTwoPagesForward(false);
    actualPage - PAGES_BACK > FIRST_PAGE
      ? setTwoPagesBack(true)
      : setTwoPagesBack(false);
  }, [actualPage]);

  return (
    <div className="w-full flex justify-center items-center pt-24 pb-12 ">
      <button onClick={moveBack} {...(isAtMinPage && isAtLimitPageAttr)}>
        <MdArrowBackIos size={48} color={isAtMinPage ? "gray" : "black"} />
      </button>
      {FIRST_PAGE !== actualPage ? (
        <PageIndicator page={FIRST_PAGE} moveToPage={moveToPage} />
      ) : null}
      {/* {forwardDifference > 1 &&
        Array.apply(null, Array(2)).map((_, index) => {
          return (
            <PageIndicator
              page={actualPage + index - 1}
              key={index}
              moveToPage={moveToPage}
            />
          );
        })} */}
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
