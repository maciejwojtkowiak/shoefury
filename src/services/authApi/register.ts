import { RegisterResponse } from "types/api/auth/register";

import authClient from "./authClient";

export const register = async (
  name: string,
  email: string,
  password: string,
): Promise<RegisterResponse> => {
  const response = await authClient.post<RegisterResponse>("/register", {
    name,
    email,
    password,
  });
  return response.data;
};
