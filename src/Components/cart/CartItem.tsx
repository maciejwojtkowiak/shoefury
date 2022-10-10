import React from "react";

import { config } from "../../config/config";

interface ProductRowProps {
  id: string;
  quantity: number;
  price: string;
  title: string;
}

const CartItem = ({
  id,
  quantity,
  price,
  title,
}: ProductRowProps): JSX.Element => {
  const deleteItemHandler = (): void => {
    const deleteItem = async (): Promise<void> => {
      const response = await fetch(`${config.backendDomain}/cart/delete-item`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
        },
        body: JSON.stringify({ productTitle: title }),
      });
      console.log(response, "RESPONSE DELETE");
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
