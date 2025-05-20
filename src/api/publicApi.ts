import axios from 'axios';

const publicApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

publicApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default publicApi;