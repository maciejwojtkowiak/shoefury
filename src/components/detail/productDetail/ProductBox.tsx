import React from "react";
import { Product } from "types/product";

interface ProductBoxProps {
  product: Product;
}

const ProductBox = ({ product }: ProductBoxProps): JSX.Element => {
  return <div>{product._id}</div>;
};

export default ProductBox;
