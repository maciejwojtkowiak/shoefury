import axios from "axios";
import config from "config/config.json";

const productsClient = axios.create({
  baseURL: `${config.backendDomain}/product/`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default productsClient;
