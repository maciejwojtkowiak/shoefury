import authClient from './authClient';

export async function Login(email: string, password: string) {
  const response = await authClient.patch('/login', {
    email: email,
    password: password,
  })

  return response;
}
