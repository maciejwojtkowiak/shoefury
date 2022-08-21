import { AxiosError } from 'axios';
import { CheckAuthResponse } from '../../types/ApiResponse';
import authClient from './authClient';

export async function checkAuthentication(
  token: string | null
): Promise<CheckAuthResponse | AxiosError> {
  try {
    console.log('FUNCTION', token);
    const response = await authClient.patch<CheckAuthResponse>(`/is-auth`);
    console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
  
}
