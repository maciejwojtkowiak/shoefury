import { IOrder } from "types/order/Order";

export interface IProfile {
  name: string;
  profileImage: string;
  orders: Array<{ order: IOrder }>;
}
