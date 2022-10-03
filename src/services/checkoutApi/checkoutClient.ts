import axios from "axios";
import config from "config/config.json";

export const checkoutClient = axios.create({
  baseURL: `${config.backendDomain}/checkout`,
  timeout: 10000,
});
