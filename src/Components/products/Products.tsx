import { Fragment, useEffect, useState } from 'react';
import { Product } from '../../types/product';
import ProductItem from './ProductItem';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/product/get-products'
        );
        const products: Product[] = (await response.json()).products;
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  });

  return (
    <Fragment>
      <h1 className="grid place-items-center">Products</h1>
      <div className='w-full grid place-items-center'>
        <div className=" w-[1800px] grid place-items-center grid-cols-3">
            {products.map((product) => (
            <ProductItem title={product.title} />
            ))}
        </div>
      </div>
      
    </Fragment>
  );
};

export default Products;
