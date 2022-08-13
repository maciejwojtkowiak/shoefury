import { Fragment, useCallback, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import ProductItem from './ProductItem';
import config from '../../config.json';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1)
  const [isAtMaxPage, setIsAtMaxPage] = useState(false)
  const [isAtMinPage, setIsAtMinPage] = useState(false)
  const loadProducts = useCallback(async () => {
    try {
      const response = await fetch(
        `${config.backendDomain}/product/get-products?page=${page}`
      );
      const data = await response.json()
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
