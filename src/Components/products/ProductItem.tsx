import config from '../../config.json';
import { BsCartPlus } from 'react-icons/bs';
import { useState } from 'react';

interface ProductProps {
  title: string;
  imageUrl: string;
  price: string;
}

const ProductItem = ({ imageUrl, price, title }: ProductProps) => {
  const [cartTouched, setCartTouched] = useState(false);
  const onCartTouchStart = () => {
    setCartTouched(true);
  };
  const onCartTouchEnd = () => {
    setCartTouched(false);
  };
  const onAddToCart = () => {
    fetch(`${config.backendDomain}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ productTitle: title }),
    });
  };

  return (
    <div className="h-[400px] w-[450px] bg-white drop-shadow-lg rounded-lg grid place-items-center">
      {title}
      <img
        className="h-48 w-48"
        src={`${config.backendDomain + '/' + imageUrl}`}
        alt="product"
      />
      <h3 className='text-2xl font-bold'>{price}$</h3>

      <div
        onMouseOver={onCartTouchStart}
        onMouseLeave={onCartTouchEnd}
        onClick={onAddToCart}
        className="justify-self-end mr-8 p-2 border-2 rounded-full hover:bg-orange-400 duration-300 cursor-pointer"
      >
        <BsCartPlus size={24} color={cartTouched ? 'white' : 'black'} />
      </div>
    </div>
  );
};

export default ProductItem;
