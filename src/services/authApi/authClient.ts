import axios from 'axios';
import config from 'config/config.json';


const authClient = axios.create({
  baseURL: `${config.backendDomain}/auth/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
  timeout: 10000,
});

export default authClient;
