import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IProduct } from "types/product";

import SquareButton from "components/ui/buttons/SquareButton";

interface ProductPriceProps {
  product: IProduct;
}
// const MIN_STAR = 1;
const MAX_STAR = 5;

const ProductPriceBox = ({ product }: ProductPriceProps): JSX.Element => {
  const onClickHandler = (): void => {
    console.log("hej");
  };
  const [hoverState, setHoverState] = useState(false);
  const [starNumHovered, setStarNumHovered] = useState(1);

  const onStarHover = (starNum: number): void => {
    setHoverState(true);
    setStarNumHovered(starNum);
  };

  const onStartUnhover = (): void => {
    setHoverState(false);
  };
  const starsArray = useMemo(() => new Array(MAX_STAR).fill(""), []);

  return (
    <div className="ml-16 w-full grid justify-evenly ">
      <div className="flex flex-col">
        <div className="flex">
          <h1 className="text-6xl font-bold">{product.title}</h1>
          <h3 className="self-end ml-2 font-bold">{product.price}$</h3>
        </div>
        {starsArray.map((star, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={index}
              color={
                starNumHovered >= starValue && hoverState ? "yellow" : "green"
              }
              className="mt-4 cursor-pointer"
              onMouseEnter={() => onStarHover(starValue)}
              onMouseLeave={onStartUnhover}
            />
          );
        })}
      </div>
      <div className="h-full">
        <SquareButton
          width="w-[20rem]"
          height="h-[5rem]"
          textSize="4xl"
          buttonText="Add to cart"
          onClickHandler={onClickHandler}
        />
      </div>
    </div>
  );
};

export default ProductPriceBox;
