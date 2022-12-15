import axios from 'axios';
import { getCookie } from 'cookies-next';

export const AxiosApi: any = () => {
  const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use(
    config => {
      const token = getCookie('token');

      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  return api;
};

export const instanceApi = AxiosApi();
