import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.67.158.168:5000/',
});

export default api;
