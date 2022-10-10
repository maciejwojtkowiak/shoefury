import axios from "axios";
import { config } from "config/config";

const cartClient = axios.create({
  baseURL: `${config.backendDomain}/cart/`,
  timeout: 10000,
});

export default cartClient;
