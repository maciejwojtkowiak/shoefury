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
    <div className="ml-16 w-full">
      <h1 className="text-6xl font-bold">{product.title}</h1>
      <h3>{product.price}</h3>
      <FormButton buttonText="Add to cart" onClickHandler={onClickHandler} />
    </div>
  );
};

export default ProductPriceBox;
