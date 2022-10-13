import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

interface OrderItemProps {
  orderId: string;
  totalPrice: number;
}

const OrderItem = ({ orderId, totalPrice }: OrderItemProps): JSX.Element => {
  // TO DO duplication
  return (
    <>
      <div className="bg-orange-400 py-2 px-4 rounded-lg ">
        <p className="text-white text-xl font-bold">{orderId}</p>
      </div>
      <div className="bg-orange-400 py-2 px-4 rounded-lg ">
        <p className="text-white text-xl font-bold">{totalPrice}$</p>
      </div>
      <div className="bg-orange-400 rounded-lg w-10 h-10 grid place-items-center">
        <AiOutlineDownload size={32} color="#ffffff" />
      </div>
    </>
  );
};

export default OrderItem;
