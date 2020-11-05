import axios from 'axios';

const api = axios.create({ 
  // baseURL: 'https://employees-server.herokuapp.com/',
  baseURL: 'http://localhost:8080/',
  headers: {
    'Access-Control-Allow-Origin' : '*',
  },
});

export default api;