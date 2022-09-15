import React from "react";
import { Product } from "types/product";
import { decodeBase64 } from "utils/decodeBase64";

interface ProductBoxProps {
  product: Product;
}

const ProductBox = ({ product }: ProductBoxProps): JSX.Element => {
  console.log("IMG URL", product.imageData);
  return (
    <div className=" h-[32rem] w-[32rem] border-color-red-500 border-2 mt-32 ml-[48rem]">
      <img
        className=" w-full h-full"
        src={decodeBase64(product.imageData)}
        alt="detail product "
      />
    </div>
  );
};

export default ProductBox;
