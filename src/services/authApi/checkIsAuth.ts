import { AxiosError } from "axios";
import { authorizationHeader } from "services/authorization/authorization";
import { ICheckAuthResponse } from "types/ApiResponse";

import authClient from "./authClient";

export async function checkAuthentication(
  token: string,
): Promise<ICheckAuthResponse | AxiosError> {
  try {
    const response = await authClient.patch<ICheckAuthResponse>(
      `/is-auth`,
      {},
      {
        headers: {
          ...authorizationHeader(),
        },
      },
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}
