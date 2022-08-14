import { Fragment, useCallback, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import ProductItem from './ProductItem';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { getProducts } from '../../services/productsApi/productsApi';
import { GetProductsResponse } from '../../types/ApiResponse';
import ErrorComponent from '../errors/ErrorComponent';
import { AxiosError } from 'axios';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [isAtMaxPage, setIsAtMaxPage] = useState(false);
  const [isAtMinPage, setIsAtMinPage] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  console.log(error);
  const loadProducts = useCallback(async () => {
    try {
      const data = (await getProducts(page)) as GetProductsResponse;
      const products: Product[] = data.products;
      const pagesCount = data.pagesCount;
      console.log('PRODUCTS', data);
      setProducts(products);
      setPagesCount(pagesCount);
      setError(null);
    } catch (error) {
      console.log('PRODUCT ERROR', error);
      setError(error as AxiosError);
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

  useEffect(() => {
    setIsAtMaxPage(page === pagesCount);
    setIsAtMinPage(page === 1);
  }, [page, pagesCount, setIsAtMaxPage, setIsAtMinPage]);

  const isAtLimitPageAttr = {
    disabled: true,
  };

  return (
    <Fragment>
      <div className="w-full grid place-items-center mt-24">
        <div className=" w-[1800px] h-[1400px]  grid  grid-cols-3 grid-rows-3 place-items-center gap-16">
          {error ? (
            <ErrorComponent
              status={error.status!}
              message={error.message}
              tryAgain={true}
              FetchFunction={loadProducts}
            />
          ) : (
            <Fragment>
              {products.map((product) => (
                <ProductItem
                  key={product.title}
                  title={product.title}
                  imageUrl={product.imageUrl}
                  price={product.price}
                />
              ))}
            </Fragment>
          )}
        </div>
        <div className="w-full flex justify-center items-center pt-24 pb-12 ">
          <button onClick={moveBack} {...(isAtMinPage && isAtLimitPageAttr)}>
            <MdArrowBackIos size={48} color={isAtMinPage ? 'gray' : 'black'} />
          </button>
          {page}
          <button onClick={moveForward} {...(isAtMaxPage && isAtLimitPageAttr)}>
            <MdArrowForwardIos size={48} color={isAtMaxPage ? 'gray' : 'black '} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
