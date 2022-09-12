import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const api = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', data: any, url: string) => {
  try {
    const res = method === 'GET'
      ? await axios({
        method,
        url: baseURL + url,
      })
      : await axios({
        method,
        url: baseURL + url,
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
