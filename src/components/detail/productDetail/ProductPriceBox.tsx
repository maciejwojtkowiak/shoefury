import React from "react";
import { Product } from "types/product";

import FormButton from "components/ui/buttons/FormButton";

interface ProductPriceProps {
  product: Product;
}

const ProductPriceBox = ({ product }: ProductPriceProps): JSX.Element => {
  const onClickHandler = (): void => {
    console.log("hej");
  };
  return (
    <div className="ml-16 w-full grid  auto-rows-min grid-flow-row">
      <div className="flex">
        <h1 className="text-6xl font-bold">{product.title}</h1>
        <h3 className="self-end ml-2 font-bold">{product.price}$</h3>
      </div>
      <div className="h-full">
        <FormButton buttonText="Add to cart" onClickHandler={onClickHandler} />
      </div>
    </div>
  );
};

export default ProductPriceBox;
