import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const loginHandle = async () => {
  try {
    const data = {
      username: 'evgeny',
      password: 'coreai-blabla',
    };
    const response = await axios({
      method: 'post',
      url: `${baseURL}/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      data,
    });
    localStorage.setItem('accessToken', response.data.accessToken);
  } catch (e) {
    console.log(e);
  }
};

const api = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data: any,
  url: string,
  additionalHeaders?: { [key: string]: string },
  signal?: any,
) => {
  try {
    const token = localStorage.getItem('accessToken');
    const GETheaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': true,
      ...additionalHeaders,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': true,
      ...additionalHeaders,
    };
    const res = method === 'GET'
      ? await axios({
        signal,
        method,
        url: baseURL + url,
        headers: GETheaders,
        withCredentials: true,
      })
      : await axios({
        signal,
        method,
        url: baseURL + url,
        headers,
        withCredentials: true,
        data,
      });

    return res;
  } catch (err: any) {
    if (err.response.status === 422) {
      loginHandle();
    }
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<any>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    return { error: 500 };
  }
};

export default api;
