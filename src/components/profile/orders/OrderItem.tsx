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
      const response = await getOrderRaport(orderId.toString());
      // const blob = new Blob([response], { type: "application/octet-stream" });
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // a.style.display = "none";
      // a.href = url;
      // // the filename you want
      // a.download = "todo-1.json";
      // document.body.appendChild(a);
      // a.click();
      // window.URL.revokeObjectURL(url);
      const linkSource = `data:application/pdf;base64,${response}`;
      const downloadLink = document.createElement("a");
      const fileName = `order-${orderId}.pdf`;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
      downloadLink.remove();
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
