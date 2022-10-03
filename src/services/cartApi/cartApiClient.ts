import axios from "axios";
import config from "config/config.json";

const cartClient = axios.create({
  baseURL: `${config.backendDomain}/cart/`,
  timeout: 10000,
});

export default cartClient;
