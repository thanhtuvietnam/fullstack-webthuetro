import axios from 'axios';
// require('dotenv').config();

const instance = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_URL,
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('persist:auth');
    console.log(token);
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
