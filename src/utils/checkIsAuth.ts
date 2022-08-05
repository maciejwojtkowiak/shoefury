import config from '../config.json';

export const checkIsAuth = async () => {
  const response = await fetch(`${config.backendDomain}/auth/is-auth`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  const data = await response.json();
  return data;
};
