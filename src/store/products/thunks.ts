import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "services/productsApi/productsApi";
import { IGetProductsResponse } from "types/ApiResponse";

export const fetchProducts = createAsyncThunk(
  "/products",
  async (pageNum: number): Promise<IGetProductsResponse> => {
    const response = await getProducts(pageNum);
    return response;
  },
);
