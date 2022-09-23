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
    <div className="grid place-items-center mx-[20%] mt-[5%] text-center">
      <ProductDescriptionHeader />
      <ProductDescriptionContent productDescription={productDescription} />
    </div>
  );
};

export default ProductDescription;
