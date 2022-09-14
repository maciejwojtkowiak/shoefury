import React from "react";
import { Product } from "types/product";

import ProductBox from "./ProductBox";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  return (
    <React.Fragment>
      <ProductBox product={product} />
    </React.Fragment>
  );
};

export default ProductDetail;
