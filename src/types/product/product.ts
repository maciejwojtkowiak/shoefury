import { IUser } from "types/user";

export interface IProductItem {
  description: string;
  title: string;
  imageData: string;
  price: string;
  _id: string;
}

interface IRating {
  reviewers: IUser[];
  rates: number[];
}

export interface IProductItemDetail {
  description: string;
  title: string;
  imageData: string;
  price: string;
  _id: string;
  rating: IRating;
}
