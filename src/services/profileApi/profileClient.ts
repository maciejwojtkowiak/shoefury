import axios from "axios";
import { config } from "config/config";

export const profileClient = axios.create({
  baseURL: `${config.backendDomain}/profile/`,
  timeout: 10000,
});
