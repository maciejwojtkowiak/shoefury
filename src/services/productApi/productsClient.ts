import axios from "axios";
import { config } from "config/config";

const productsClient = axios.create({
  baseURL: `${config.backendDomain}/product/`,
  timeout: 10000,
});

export default productsClient;
