import axios from 'axios';

const authURL = 'https://murmuring-plains-40389.herokuapp.com/api';

// eslint-disable-next-line consistent-return
const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/users/signin`, {
      account,
      password,
    });

    // 如果註冊成功，拿得到token
    const { token } = data.data;

    // 判斷是否登入要回傳的內容
    if (token) {
      return { ...data.data };
    }
    return data.data;
  } catch (error) {
    console.log('[Login Failed]:', error);
  }
};
export default login;
