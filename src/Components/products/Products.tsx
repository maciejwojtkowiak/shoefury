import { Fragment, useCallback, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import ProductItem from './ProductItem';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { getProducts } from '../../services/productsApi/productsApi';
import { GetProductsResponse } from '../../services/productsApi/types';
import { ApiResponse } from '../../types/ApiResponse';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1)
  const [isAtMaxPage, setIsAtMaxPage] = useState(false)
  const [isAtMinPage, setIsAtMinPage] = useState(false)
  const loadProducts = useCallback(async () => {
    try {
      const data = await getProducts(page) as GetProductsResponse
      console.log('DATA', data)
      const products: Product[] = data.products;
      const pagesCount = data.pagesCount
      setProducts(products);
      setPagesCount(pagesCount)
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

  useEffect(() => {
    setIsAtMaxPage(page === pagesCount)
    setIsAtMinPage(page === 1)
  }, [page, pagesCount, setIsAtMaxPage, setIsAtMinPage])

  return (
    <Fragment>
      <div className="w-full grid place-items-center mt-24">
        <div className=" w-[1800px]  grid  grid-cols-3 place-items-center gap-16">
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
            <MdArrowBackIos size={48} color={isAtMinPage ? "gray" : "black"} />
          </button>
          {page}
          <button onClick={moveForward}>
            <MdArrowForwardIos size={48} color={isAtMaxPage ? "gray" : "black "} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
