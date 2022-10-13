interface IOrderData {
  _id: string;
  totalPrice: number;
}

export interface IOrder {
  order: IOrderData;
}
