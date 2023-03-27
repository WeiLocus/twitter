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
      config.headers.Authorization = `Bearer ${token}`;
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

// * 取得特定使用者的追隨者清單
export async function getUserFollowers(id) {
  try {
    const res = await axiosInstance.get(`${baseURL}/users/${id}/followers`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('[Get User Followers failed]: ', error);
  }
}

// * 取得特定使用者的正在追隨清單
export async function getUserFollowings(id) {
  try {
    const res = await axiosInstance.get(`${baseURL}/users/${id}/followings`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('[Get User Followings failed]: ', error);
  }
}

// * 取得追蹤人數 top N 的使用者名單
export async function getTopUsers() {
  const limit = 5;
  try {
    const res = await axiosInstance.get(`${baseURL}/users/top?limit=${limit}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('[Get Top Users failed]: ', error);
  }
}

// * 修改個人資料
export async function changeUserInformation({
  id,
  account,
  name,
  email,
  password,
  checkPassword,
}) {
  try {
    const response = await axiosInstance.put(`${baseURL}/users/${id}/setting`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });
    const { data, status } = response;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.error('[Change User Information failed]: ', error);
  }
}
