import axios from "axios";
import config from "config/config.json";

const cartClient = axios.create({
  baseURL: `${config.backendDomain}/cart/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
  },
  timeout: 10000,
});

export default cartClient;
