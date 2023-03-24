import axios from 'axios';

const baseURL = 'https://murmuring-plains-40389.herokuapp.com/api';

// eslint-disable-next-line consistent-return
// login api
export async function login({ account, password }) {
  try {
    const { data } = await axios.post(`${baseURL}/users/signin`, {
      account,
      password,
    });

    // 如果登入成功，拿得到token
    const { token } = data.data;

    // 判斷是否登入要回傳的內容
    if (token) {
      return { ...data.data };
    }
    return data.data;
  } catch (error) {
    console.log('[Login Failed]:', error);
  }
}

// signup api
export async function register({
  account,
  name,
  email,
  password,
  checkPassword,
}) {
  try {
    const { data } = await axios.post(`${baseURL}/users`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });
    // 印出回傳值data
    console.log('data', data);

    return { ...data.data };
  } catch (error) {
    console.log('[Register Failed]', error);
  }
}

export default { login, register };
