import { AxiosError } from "axios";
import { CheckAuthResponse } from "../../types/ApiResponse";
import authClient from "./authClient";

export async function checkAuthentication(): Promise<CheckAuthResponse | AxiosError> {
    try {
       
            const response = await authClient.patch<CheckAuthResponse>(`/is-auth`)
            console.log('RESPONSE')
            return response.data
    } catch (error) {
        const axiosError = error as AxiosError
        return axiosError
    }
}