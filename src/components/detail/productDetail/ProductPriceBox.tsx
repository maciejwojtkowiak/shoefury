import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "store/hooks/reduxHooks";
import { addReview } from "store/products/thunks";
import { IProduct } from "types/product";

import SquareButton from "components/ui/buttons/SquareButton";

interface ProductPriceProps {
  product: IProduct;
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

  return (
    <div className="ml-16 w-full grid justify-evenly ">
      <div className="flex flex-col">
        <div className="flex">
          <h1 className="text-6xl font-bold">{product.title}</h1>
          <h3 className="self-end ml-2 font-bold">{product.price}$</h3>
        </div>
        <div className="flex">
          {starsArray.map((star, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={index}
                color={
                  starNumHovered >= starValue && hoverState
                    ? "#fde047"
                    : "black"
                }
                size={44}
                className="mt-4 cursor-pointer pl-4 first:pl-0"
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
