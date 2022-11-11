import React from "react";
import { IProductItemDetail } from "types/product/product";

import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImageBox from "./ProductImageBox";
import ProductPriceBox from "./ProductPriceBox";

interface ProductDetailProps {
  product: IProductItemDetail;
}

const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  return (
    <>
      <div className="w-[90rem] h-[32rem] mt-32 ml-[48rem] grid justify-content-center auto-cols-min grid-flow-col">
        <ProductImageBox product={product} />
        <ProductPriceBox product={product} />
      </div>
      <ProductDescription productDescription={product.description} />
    </>
  );
};

export default ProductDetail;
