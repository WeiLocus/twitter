/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseURL = 'https://murmuring-plains-40389.herokuapp.com/api';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

// * 後台取得所有貼文
export async function adminGetTweets() {
  try {
    const res = await axiosInstance.get(`${baseURL}/admin/tweets`);
    return res.data;
  } catch (error) {
    console.error('[Admin Get Tweets failed]: ', error);
  }
}

// * 刪除特定推文
export async function deleteTweet(id) {
  try {
    const res = await axiosInstance.delete(`${baseURL}/admin/tweet/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('[Admin Delete Tweet failed]: ', error);
  }
}
