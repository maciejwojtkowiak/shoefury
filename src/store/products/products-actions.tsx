import { getProducts } from "services/productsApi/productsApi";

import { AppDispatch } from "../store";

import { productsAction } from "./products-slice";

export const fetchProducts = (pageNum: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const products = await getProducts(pageNum);
      dispatch(productsAction.setProductsData(products));
    } catch (error) {
      console.log(error);
    }
  };
};
