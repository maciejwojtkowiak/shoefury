import React from "react";
import { Product } from "types/product";

interface ProductBoxProps {
  product: Product;
}

const ProductBox = ({ product }: ProductBoxProps): JSX.Element => {
  console.log("IMG URL", product.imageData);
  return (
    <div className=" h-[32rem] w-[32rem] border-color-red-500 border-2 mt-32 ml-[48rem]">
      <img src={product.imageData} alt="detail product" />
    </div>
  );
};

export default ProductBox;
