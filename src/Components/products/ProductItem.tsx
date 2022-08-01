import config from '../../config.json';
import { BsCartPlus } from 'react-icons/bs';
import { useState } from 'react';

interface ProductProps {
  title: string;
  imageUrl: string;
}

const ProductItem = ({ imageUrl, title }: ProductProps) => {
  const [cartTouched, setCartTouched] = useState(false);
  const onCartTouchStart = () => {
    setCartTouched(true);
  };
  const onCartTouchEnd = () => {
    setCartTouched(false);
  };
  console.log('touch', cartTouched);
  return (
    <div className="h-[400px] w-[450px] bg-white drop-shadow-lg rounded-lg grid place-items-center">
      {title}
      <img
        className="h-48 w-48"
        src={`${config.backendDomain + '/' + imageUrl}`}
        alt="product"
      />
      <div
        onMouseOver={onCartTouchStart}
        onMouseLeave={onCartTouchEnd}
        className="justify-self-end mr-8 p-2 border-2 rounded-full hover:bg-orange-400 duration-300 cursor-pointer"
      >
        <BsCartPlus size={24} color={cartTouched ? 'white' : 'black'} />
      </div>
    </div>
  );
};

export default ProductItem;
