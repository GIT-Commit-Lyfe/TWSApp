import axios from 'axios';

const api = axios.create({
  baseURL: 'URL', //taro di env
  timeout: 30000,
});

export default api;
