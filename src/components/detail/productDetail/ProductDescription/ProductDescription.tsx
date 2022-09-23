import React from "react";

import ProductDescriptionContent from "./ProductDescriptionContent";
import ProductDescriptionHeader from "./ProductDescriptionHeader";

interface ProductDescriptionProps {
  productDescription: string;
}

const ProductDescription = ({
  productDescription,
}: ProductDescriptionProps): JSX.Element => {
  return (
    <>
      <ProductDescriptionHeader />
      <ProductDescriptionContent productDescription={productDescription} />
    </>
  );
};

export default ProductDescription;
