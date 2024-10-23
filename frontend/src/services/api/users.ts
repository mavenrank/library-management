import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const updateUser = async (id: string, user: any) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};