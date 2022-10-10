import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Paths } from "config/paths";
import { motion } from "framer-motion";
import { addItemToCart } from "services/cartApi/cartApi";

interface ProductProps {
  id: string;
  title: string;
  imageData: string;
  price: string;
}

const ProductItem = ({
  id,
  imageData,
  price,
  title,
}: ProductProps): JSX.Element => {
  const [cartTouched, setCartTouched] = useState(false);
  const onCartTouchStart = (): void => {
    setCartTouched(true);
  };
  const onCartTouchEnd = (): void => {
    setCartTouched(false);
  };
  const onAddToCart = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    const addItem = async (): Promise<void> => {
      try {
        await addItemToCart(id);
      } catch (e) {
        console.log(e);
      }
    };
    void addItem();
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Link
        to={`${Paths.PRODUCT}/${id}`}
        className="h-[400px] w-[450px] bg-white drop-shadow-lg rounded-lg grid place-items-center cursor-pointer"
      >
        {title}
        <img className="h-48 w-48" src={imageData} alt="product" />
        <h3 className="text-2xl font-bold">{price}$</h3>
        <button
          onMouseOver={onCartTouchStart}
          onMouseLeave={onCartTouchEnd}
          onClick={onAddToCart}
          className="justify-self-end mr-8 p-2 border-2 rounded-full hover:bg-orange-400 duration-300 cursor-pointer"
        >
          <BsCartPlus size={24} color={cartTouched ? "white" : "black"} />
        </button>
      </Link>
    </motion.div>
  );
};

export default ProductItem;
