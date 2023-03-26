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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('[Get CurrentUser failed]: ', error);
    return error.response.data.status;
  }
}

// * 取得特定使用者資訊
export async function getUserData(id) {
  try {
    const res = await axiosInstance.get(`${baseURL}/users/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Get User Data failed]: ', error);
  }
}

// * 取得特定使用者發過的推文
export async function getUserTweets(id) {
  try {
    const res = await axiosInstance.get(`${baseURL}/users/${id}/tweets`);
    return res.data;
  } catch (error) {
    console.error('[Get User Tweets failed]: ', error);
  }
}

// * 取得特定使用者發過的留言
export async function getUserReplies(id) {
  try {
    const res = await axiosInstance.get(
      `${baseURL}/users/${id}/replied_tweets`
    );
    return res.data;
  } catch (error) {
    console.error('[Get User Replies failed]: ', error);
  }
}

// * 取得特定使用者喜歡的推文
export async function getUserLikes(id) {
  try {
    const res = await axiosInstance.get(`${baseURL}/users/${id}/likes`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('[Get User Likes failed]: ', error);
  }
}
