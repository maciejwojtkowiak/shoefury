import { RegisterResponse } from "types/api/auth/register";

import authClient from "./authClient";

export const register = async (): Promise<RegisterResponse> => {
  const response = await authClient.post<RegisterResponse>("/register");
  return response.data;
};
