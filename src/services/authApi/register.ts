import { RegisterResponse } from "types/api/auth/register";

import authClient from "./authClient";

<<<<<<< HEAD
export const register = async (): Promise<RegisterResponse> => {
  const response = await authClient.post<RegisterResponse>("/register");
=======
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
>>>>>>> dev
  return response.data;
};
