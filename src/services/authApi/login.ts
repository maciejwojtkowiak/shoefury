import { LoginResponse } from "types/ApiResponse";

import authClient from "./authClient";

export async function Login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const response = await authClient.patch("/login", {
    email,
    password,
  });

  return response.data;
}
