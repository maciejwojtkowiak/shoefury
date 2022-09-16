import React from "react";
import { Product } from "types/product";

import SquareButton from "components/ui/buttons/SquareButton";

interface ProductPriceProps {
  product: Product;
}

const ProductPriceBox = ({ product }: ProductPriceProps): JSX.Element => {
  const onClickHandler = (): void => {
    console.log("hej");
  };
  return (
    <div className="ml-16 w-full grid justify-evenly ">
      <div>
        <div className="flex">
          <h1 className="text-6xl font-bold">{product.title}</h1>
          <h3 className="self-end ml-2 font-bold">{product.price}$</h3>
        </div>
      </div>
      <div className="h-full">
        <SquareButton
          textSize="4xl"
          buttonText="Add to cart"
          onClickHandler={onClickHandler}
        />
      </div>
    </div>
  );
};

export default ProductPriceBox;
