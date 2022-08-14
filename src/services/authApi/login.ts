import authClient from './authClient';

async function Login(email: string, password: string) {
  const response = await authClient.patch('/login', {
    email: email,
    password: password,
  });

  return response;
}
