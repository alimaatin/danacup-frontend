import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/refresh-token')
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await api.post('/refresh-token', { refreshToken });
        const { token } = response.data;

        localStorage.setItem('token', token);

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (err) {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
