import { IOrder } from "types/user/user";

export interface IProfile {
  name: string;
  profileImage: string;
  orders: IOrder[];
}
