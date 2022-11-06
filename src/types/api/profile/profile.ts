import { IOrder } from "types/order/Order";

import { ApiResponseDefault } from "../ApiResponseDefault";

export interface IProfile {
  name: string;
  profileImage: string;
  orders: Array<{ order: IOrder }>;
}

export interface IProfileEditResponse extends ApiResponseDefault {
  name: string;
}
