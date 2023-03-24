/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const baseURL = 'https://murmuring-plains-40389.herokuapp.com/api';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);
