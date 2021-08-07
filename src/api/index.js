import axios from 'axios';
import {API_URL} from '@env';

const createAPI = (baseURL = API_URL, config = {}) => {
  const axiosInstance = axios.create({
    baseURL: baseURL,
    crossDomain: true,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...config,
  });

  // setup axios.intercept
  return axiosInstance;
};

const api = createAPI();

export default api;
