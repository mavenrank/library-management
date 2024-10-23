import axios from 'axios';

const API_URL = 'http://localhost:5000/api/hirings';

export const getHirings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getHiring = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createHiring = async (hiring: any) => {
  const response = await axios.post(API_URL, hiring);
  return response.data;
};

export const updateHiring = async (id: string, hiring: any) => {
  const response = await axios.put(`${API_URL}/${id}`, hiring);
  return response.data;
};

export const deleteHiring = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};