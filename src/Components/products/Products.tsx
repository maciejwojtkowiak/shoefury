import { Fragment, useCallback, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import ProductItem from './ProductItem';
import config from '../../config.json';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(2);
  const loadProducts = useCallback(async () => {
    try {
      const response = await fetch(
        `${config.backendDomain}/product/get-products?page=${page}`
      );
      const products: Product[] = (await response.json()).products;
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }, [page]);
  useEffect(() => {
    loadProducts();
  }, [loadProducts, page]);

  const moveForward = () => {
    setPage((prevPage) => ++prevPage);
  };

  const moveBack = () => {
    setPage((prevPage) => --prevPage);
  };

  return (
    <Fragment>
      <div className="w-full grid place-items-center mt-24">
        <div className=" w-[1800px] grid place-items-center grid-cols-3 gap-16">
          {products.map((product) => (
            <ProductItem
              key={product.title}
              title={product.title}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center pt-24 pb-12 ">
          <button onClick={moveBack}>
            <MdArrowBackIos size={48} />
          </button>
          {page}
          <button onClick={moveForward}>
            <MdArrowForwardIos size={48} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
