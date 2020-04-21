import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.covid19api.com',
  timeout: 3000,
});

export default api;
