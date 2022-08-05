import config from '../../config.json';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
const Cart = () => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`${config.backendDomain}/cart/get-cart`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });
        const data = await response.json();
        console.log('DATA', data.products.cart.items);
        setProducts(data.products.cart.items);
      } catch (e) {
        console.log(e);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product: any) => {
        return <h1>{product.productId.title}</h1>;
      })}
    </div>
  );
};

export default Cart;
