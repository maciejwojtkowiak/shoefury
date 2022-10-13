import React from "react";
import { IOrder } from "types/user/user";

interface IOrderListProps {
  orders: IOrder[];
}

const OrderList = ({ orders }: IOrderListProps): JSX.Element => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Orders</h1>
      {orders.map((order) => (
        <h1 key={order.order.totalPrice}>{order.order.totalPrice}</h1>
      ))}
    </div>
  );
};

export default OrderList;
