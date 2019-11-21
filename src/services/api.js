import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.172.21.159:3333',
});

export default api;
