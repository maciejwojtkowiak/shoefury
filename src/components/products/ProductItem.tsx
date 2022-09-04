import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import config from "config/config.json";
import { Paths } from "config/Paths";
import { motion } from "framer-motion";

interface ProductProps {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
}

const ProductItem = ({ id, imageUrl, price, title }: ProductProps) => {
  const hej = "12";
  const [cartTouched, setCartTouched] = useState(false);
  const onCartTouchStart = () => {
    setCartTouched(true);
  };
  const onCartTouchEnd = () => {
    setCartTouched(false);
  };
  const onAddToCart = () => {
    try {
      fetch(`${config.backendDomain}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ productTitle: title }),
      });
    } catch (e) {
      console.log("hej");
    }
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
      <a
        href={`${Paths.PRODUCT}/${id}`}
        className="h-[400px] w-[450px] bg-white drop-shadow-lg rounded-lg grid place-items-center cursor-pointer"
      >
        {title}
        <img
          className="h-48 w-48"
          src={`${config.backendDomain + "/" + imageUrl}`}
          alt="product"
        />
        <h3 className="text-2xl font-bold">{price}$</h3>

        <div
          onMouseOver={onCartTouchStart}
          onMouseLeave={onCartTouchEnd}
          onClick={onAddToCart}
          className="justify-self-end mr-8 p-2 border-2 rounded-full hover:bg-orange-400 duration-300 cursor-pointer"
        >
          <BsCartPlus size={24} color={cartTouched ? "white" : "black"} />
        </div>
      </a>
    </motion.div>
  );
};

export default ProductItem;
