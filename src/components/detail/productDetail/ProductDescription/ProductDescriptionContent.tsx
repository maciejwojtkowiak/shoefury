import React from "react";

interface ProductDescriptionContentProps {
  productDescription: string;
}

const ProductDescriptionContent = ({
  productDescription,
}: ProductDescriptionContentProps): JSX.Element => {
  return <p>{productDescription}</p>;
};

export default ProductDescriptionContent;
