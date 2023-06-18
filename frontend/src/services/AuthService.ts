import axios, {AxiosResponse} from 'axios';

const API_URL = 'http://10.0.2.2:3333';

export async function userRegister(
  username: string,
  email: string,
  password: string,
  passwordConfirmation: string,
): Promise<AxiosResponse> {
  return axios.post(`${API_URL}/auth/register`, {
    username,
    email,
    password,
    passwordConfirmation,
  });
}

export async function userLogin(
  username: string,
  password: string,
): Promise<AxiosResponse> {
  return axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
}
