import React from "react";
import { Product } from "types/product";

interface ProductBoxProps {
  product: Product;
}

const ProductBox = ({ product }: ProductBoxProps): JSX.Element => {
  return (
    <div className="border-color-red-500 border-2">
      <img src={product.imageUrl} alt="detail product" />
    </div>
  );
};

export default ProductBox;
