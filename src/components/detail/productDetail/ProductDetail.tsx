import React from "react";
import { IProductData } from "services/productsApi/reviewApi";
import { useAppDispatch } from "store/hooks/reduxHooks";
import { addReview } from "store/products/thunks";
import { IProduct } from "types/product";

import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImageBox from "./ProductImageBox";
import ProductPriceBox from "./ProductPriceBox";

interface ProductDetailProps {
  product: IProduct;
}

const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const onAddReview = (event: React.MouseEvent): void => {
    event.stopPropagation();
    const productData: IProductData = {
      productId: product._id,
      rate: 5,
    };
    void dispatch(addReview(productData));
  };
  return (
    <>
      <div
        className="w-[90rem] h-[32rem] mt-32 ml-[48rem] grid justify-content-center auto-cols-min grid-flow-col"
        onClick={onAddReview}
      >
        <ProductImageBox product={product} />
        <ProductPriceBox product={product} />
      </div>
      <ProductDescription productDescription={product.description} />
    </>
  );
};

export default ProductDetail;
