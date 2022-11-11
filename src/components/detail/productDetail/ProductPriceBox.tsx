import React, { useCallback, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "store/hooks/reduxHooks";
import { addReview } from "store/products/thunks";
import { IProductItemDetail } from "types/product/product";

import SquareButton from "components/ui/buttons/SquareButton";

interface ProductPriceProps {
  product: IProductItemDetail;
}
// const MIN_STAR = 1;
const MAX_STAR = 5;

const ProductPriceBox = ({ product }: ProductPriceProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [hoverState, setHoverState] = useState(false);
  const [starNumHovered, setStarNumHovered] = useState(1);

  const onStarHover = (starNum: number): void => {
    setHoverState(true);
    setStarNumHovered(starNum);
  };

  const onStartUnhover = (): void => {
    setHoverState(false);
  };

  const onReviewHandler = (rate: number): void => {
    const createReview = async (): Promise<void> => {
      void dispatch(addReview({ productId: product._id, rate }));
    };
    void createReview();
  };

  const starsArray = useMemo(() => new Array(MAX_STAR).fill(""), []);
  const userRating = useMemo(() => {
    const starRating = product.rating.rates.reduce(
      (prevRate, acctualRate) => prevRate + acctualRate,
      0,
    );
    return starRating;
  }, []);

  const handleStarColor = useCallback(
    (starValue: number) => {
      if (hoverState) {
        return starNumHovered >= starValue && hoverState ? "#fde047" : "black";
      }
      if (!hoverState) {
        return userRating - starValue <= 0.5 ? "#fde047" : "black";
      }
      return "black";
    },
    [hoverState, starNumHovered],
  );

  return (
    <div className="ml-16 w-full grid justify-evenly ">
      <div className="flex flex-col">
        <div className="flex">
          <h1 className="text-6xl font-bold">{product.title}</h1>
          <h3 className="self-end ml-2 font-bold">{product.price}$</h3>
        </div>
        <div className="flex">
          {starsArray.map((_, index) => {
            const starValue = index + 1;

            return (
              <FaStar
                key={index}
                color={handleStarColor(starValue)}
                className="mt-4 w-auto h-6 cursor-pointer pl-4 first:pl-0"
                onMouseEnter={() => onStarHover(starValue)}
                onMouseLeave={onStartUnhover}
                onClick={() => onReviewHandler(starValue)}
              />
            );
          })}
        </div>
      </div>
      <div className="h-full">
        <SquareButton
          width="w-[20rem]"
          height="h-[5rem]"
          textSize="4xl"
          buttonText="Add to cart"
          onClickHandler={() => console.log("HEJ")}
        />
      </div>
    </div>
  );
};

export default ProductPriceBox;
