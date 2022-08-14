import  { AxiosError } from "axios";
import productsClient from "./productsClient";
import { GetProductsResponse } from "../../types/ApiResponse";

export async function getProducts(pageNum: number): Promise<GetProductsResponse | AxiosError>  {
    try {
        const response = await productsClient.get<GetProductsResponse>(`/get-products?page=${pageNum}`) 
        const data = response.data 
        return  data 
    } catch (error) {
       const axiosError = error as AxiosError
       return axiosError
       
    }
   
}
