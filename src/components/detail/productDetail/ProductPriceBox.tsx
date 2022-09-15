import React from "react";
import { Product } from "types/product";

interface ProductPriceProps {
  product: Product;
}

const ProductPriceBox = ({ product }: ProductPriceProps): JSX.Element => {
  return (
    <div className="ml-16">
      <h1 className="text-6xl font-bold">{product.title}</h1>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ProductPriceBox;
