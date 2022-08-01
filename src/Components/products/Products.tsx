import { Fragment, useCallback, useEffect, useState } from 'react';
import { Product } from '../../types/product';
import ProductItem from './ProductItem';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const loadProducts = useCallback(async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/product/get-products'
      );
      const products: Product[] = (await response.json()).products;
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  console.log(products);
  return (
    <Fragment>
      <div className="w-full grid place-items-center">
        <div className=" w-[1800px] grid place-items-center grid-cols-3 gap-16">
          {products.map((product) => (
            <ProductItem
              key={product.title}
              title={product.title}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
