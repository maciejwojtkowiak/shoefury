import React from "react";
import { deleteCartItem } from "services/cartApi/cartApi";

interface ProductRowProps {
  id: string;
  image: string;
  quantity: number;
  price: string;
  title: string;
}

const CartItem = ({
  id,
  image,
  quantity,
  price,
  title,
}: ProductRowProps): JSX.Element => {
  const deleteItemHandler = (): void => {
    const deleteItem = async (): Promise<void> => {
      await deleteCartItem(id);
    };
    void deleteItem();
  };
  return (
    <div className="w-full grid grid-cols-[1fr_1fr_1fr] place-items-center text-xl font-bold relative">
      <div className="flex justify-center items-center w-24 h-24">
        <img
          className="absolute left-0 w-20 h-20 border-2 ml-12"
          alt="product-image"
          src={image}
        />
        <h3>{title}</h3>
      </div>
      <h3>{quantity}</h3>
      <h3>{+price * quantity}</h3>
      <button
        className="absolute right-1 mr-16 bg-orange-300 px-2 text-white"
        onClick={deleteItemHandler}
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
