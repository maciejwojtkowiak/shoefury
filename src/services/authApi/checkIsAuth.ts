import { AxiosError } from "axios";
import { ICheckAuthResponse } from "types/ApiResponse";

import authClient from "./authClient";

export async function checkAuthentication(
  token: string,
): Promise<ICheckAuthResponse | AxiosError> {
  try {
    console.log("FUNCTION", token);
    const response = await authClient.patch<ICheckAuthResponse>(
      `/is-auth`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log("RESPONSE", response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}
