import React from "react";

import config from "../../config/config.json";

interface ProductRowProps {
  title: string;
  quantity: number;
  price: string;
}

const CartItem = ({ title, quantity, price }: ProductRowProps): JSX.Element => {
  const deleteItemHandler = (): void => {
    const deleteItem = async (): Promise<void> => {
      await fetch(`${config.backendDomain}/cart/delete-item`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
        },
      });
    };
    void deleteItem();
  };
  return (
    <div className="w-full grid grid-cols-3 place-items-center relative">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h3>{quantity}</h3>
      </div>
      <div>
        <h3>{+price * quantity}</h3>
      </div>
      <button className="absolute right-1 mr-16" onClick={deleteItemHandler}>
        X
      </button>
    </div>
  );
};

export default CartItem;
