import axios from 'axios';

const baseURL = 'https://murmuring-plains-40389.herokuapp.com/api';

// eslint-disable-next-line consistent-return
// login api
export async function login({ account, password, isAdmin = false }) {
  try {
    console.log(isAdmin);
    const url = isAdmin ? `${baseURL}/admin/users` : `${baseURL}/users/signin`;
    console.log(url);
    const method = isAdmin ? 'GET' : 'POST';
    const { data } = await axios({
      method,
      url,
      data: {
        account,
        password,
      },
    });
    console.log('data', data);
    // 如果登入成功，拿得到token
    const { token } = data;

    // 判斷是否登入要回傳的內容
    if (token) {
      return { ...data };
    }
    return data;
  } catch (error) {
    const { data, status } = error.response;
    if (status === 400) {
      return { status: 'error', message: data.message };
    }
    if (status === 403) {
      return { status: 'error', message: data.message };
    }
    if (status === 404) {
      return { status: 'error', message: data.message };
    }
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

    return { ...data };
  } catch (error) {
    console.log('[Register Failed]', error);
  }
}

export default { login, register };
