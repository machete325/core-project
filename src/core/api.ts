import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const api = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', data: any, url: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = method === 'GET'
      ? await axios({
        method,
        url: baseURL + url,
        headers,
        withCredentials: true,
      })
      : await axios({
        method,
        url: baseURL + url,
        headers,
        withCredentials: true,
        data,
      });
    return res;
  } catch (err) {
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
