import React from "react";

interface OrderColumnTitleProps {
  title: string;
}

const OrderColumnTitle = ({ title }: OrderColumnTitleProps): JSX.Element => {
  return <p className="text-2xl font-bold">{title}</p>;
};

export default OrderColumnTitle;
