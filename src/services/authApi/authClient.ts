import axios from "axios";
import { config } from "config/config";

const authClient = axios.create({
  baseURL: `${config.backendDomain}/auth/`,
  timeout: 10000,
});

export default authClient;
