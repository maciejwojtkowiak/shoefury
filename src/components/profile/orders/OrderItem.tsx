import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { getOrderRaport } from "services/profileApi/profileApi";

interface OrderItemProps {
  orderId: string;
  totalPrice: number;
}

const OrderItem = ({ orderId, totalPrice }: OrderItemProps): JSX.Element => {
  // TO DO duplication
  const downloadHandler = (): void => {
    const getOrderPdf = async (): Promise<void> => {
      const response = await getOrderRaport(orderId);
      console.log(response);
      const file = window.URL.createObjectURL(
        new Blob([response], { type: "application/pdf" }),
      );
      window.open(file);
    };
    void getOrderPdf();
  };
  return (
    <>
      <div className="bg-orange-400 py-2 px-4 rounded-lg ">
        <p className="text-white text-xl font-bold">{orderId}</p>
      </div>
      <div className="bg-orange-400 py-2 px-4 rounded-lg ">
        <p className="text-white text-xl font-bold">{totalPrice}$</p>
      </div>
      <div
        className="bg-orange-400 rounded-lg w-10 h-10 grid place-items-center"
        onClick={downloadHandler}
      >
        <AiOutlineDownload size={32} color="#ffffff" />
      </div>
    </>
  );
};

export default OrderItem;
