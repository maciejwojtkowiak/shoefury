import  { AxiosError } from "axios";
import { ApiResponse } from "../../types/ApiResponse";
import productsClient from "./productsClient";
import { GetProductsResponse } from "./types";

export async function getProducts(pageNum: number): Promise<GetProductsResponse | AxiosError>  {
    try {
        const response = await productsClient.get<ApiResponse<GetProductsResponse>>(`/get-products?page=${pageNum}`) 
        const data = response.data 
        return  data.data
    } catch (error) {
       const axiosError = error as AxiosError
       return axiosError
       
    }
   
}
