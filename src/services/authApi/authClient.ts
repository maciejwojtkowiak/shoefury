import axios from 'axios';
import config from '../../config.json';

const authClient = axios.create({
  baseURL: `${config.backendDomain}/auth/`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default authClient;
