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

// * 取得目前登入的使用者資訊
export async function getCurrentUser() {
  try {
    const res = await axiosInstance.get(`${baseURL}/users/current_user`);
    return res;
  } catch (error) {
    console.error('[Get CurrentUser failed]: ', error);
  }
}

// * 取得特定使用者資訊
export async function getUserData(id) {
  try {
    const res = await axiosInstance.get(`${baseURL}/users/${id}`);
    return res;
  } catch (error) {
    console.error('[Get User Data failed]: ', error);
  }
}
