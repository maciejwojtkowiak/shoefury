import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  getProducts,
  IProductValues,
} from "services/productsApi/productsApi";
import { IGetProductsResponse } from "types/ApiResponse";

export const fetchProducts = createAsyncThunk(
  "/products",
  async (pageNum: number): Promise<IGetProductsResponse> => {
    const response = await getProducts(pageNum);
    return response;
  },
);

export const createProduct = createAsyncThunk(
  "add-product",
  async (data: IProductValues) => {
    const response = await addProduct(data);
    console.log("RESP", response);
    return response;
  },
);
