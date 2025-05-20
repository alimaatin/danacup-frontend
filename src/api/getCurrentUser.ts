import api from './api';

const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    //@ts-ignore
    if (error.response?.status === 401) {
      return false;
    }

    return false;
  }
};

export default getCurrentUser;