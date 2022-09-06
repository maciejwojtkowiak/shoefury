import React from "react";

interface ProductRowProps {
  title: string;
  quantity: number;
  price: string;
}

const CartItem = ({ title, quantity, price }: ProductRowProps): JSX.Element => {
  console.log("price", price);
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
      <button className="absolute right-1 mr-16">X</button>
    </div>
  );
};

export default CartItem;
