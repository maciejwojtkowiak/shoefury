import config from '../../config.json';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface wrapperProps {
  children: React.ReactNode;
}
const IsAuth = (props: wrapperProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const isAuth = async () => {
      const response = await fetch(`${config.backendDomain}/auth/is-auth`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      setIsAuth(data.isAuth);
      setIsLoading(false);
    };
    isAuth();
  }, []);
  useEffect(() => {
    setIsLoaded(!isLoading && isAuth);
  }, [isAuth, isLoading]);
  if (isLoaded) return <div>{props.children}</div>;
  if (!isAuth && !isLoading) return <Navigate to="/" />;
  return <div>Loading</div>;
};

export default IsAuth;
