import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const createAuthor = async (data: any) => {
    return api.post('/authors', data);
  };

export const createHiring = async (data: any) => {
  return api.post('/hirings', data);
};

export const getHiring = async (id: number) => {
  return api.get(`/hirings/${id}`);
};

export const updateHiring = async (id: number, data: any) => {
  return api.put(`/hirings/${id}`, data);
};

export const deleteHiring = async (id: number) => {
  return api.delete(`/hirings/${id}`);
};

export const getAllHirings = async () => {
  return api.get('/hirings');
};