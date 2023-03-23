/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const baseURL = 'https://murmuring-plains-40389.herokuapp.com/api';

async function getTweets(token) {
  try {
    const response = await axios.get(`${baseURL}/tweets`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getTweets };
