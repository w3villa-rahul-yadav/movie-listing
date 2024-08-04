import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://test.create.diagnal.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default axiosInstance;
