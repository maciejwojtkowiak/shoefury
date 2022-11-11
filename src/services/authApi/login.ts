import { ILoginResponse } from "types/api/ApiResponse";

import authClient from "./authClient";

export async function Login(
  email: string,
  password: string,
): Promise<ILoginResponse> {
  const response = await authClient.patch("/login", {
    email,
    password,
  });

  return response.data;
}
