import React from "react";
import { IOrder } from "types/user/user";

import OrderColumnTitle from "./OrderColumnTitle";
import OrderItem from "./OrderItem";

interface IOrderListProps {
  orders: IOrder[];
}

const OrderList = ({ orders }: IOrderListProps): JSX.Element => {
  console.log("ORDERS", orders);
  if (orders.length === 0) {
    return (
      <div className="w-full mt-32 text-4xl font-bold grid place-items-center">
        <p>No orders</p>
      </div>
    );
  }
  return (
    <div className="px-20 py-12">
      <h3 className="text-center font-bold text-4xl">Orders</h3>
      <div className="grid grid-cols-3 w-full place-items-center mt-6 gap-y-8">
        <OrderColumnTitle title="Order ID" />
        <OrderColumnTitle title="Total price" />
        <OrderColumnTitle title="Raport (download)" />
        {orders.map((order) => (
          <OrderItem
            key={order.order?._id}
            orderId={order.order?._id}
            totalPrice={order.order?.totalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
