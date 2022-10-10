import axios from "axios";
import { config } from "config/config";

export const productsClient = axios.create({
  baseURL: `${config.backendDomain}/product/`,
  timeout: 10000,
});
