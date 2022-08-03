import AddProduct from '../components/addProduct/AddProduct';

import config from '../config.json';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
const AddProductPage = () => {
  const [isAuth, setIsAuth] = useState(false);
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
    };
    isAuth();
  }, []);
  return isAuth ? <AddProduct /> : <Navigate to="/" />;
};

export default AddProductPage;
