import axios from 'axios';
import { Author } from '../../types/Author';

const API_URL = 'http://localhost:5000/api/authors';

export const getAuthors = async (): Promise<Author[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getAuthorById = async (id: number): Promise<Author> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
export const createAuthor = async (authorData: Partial<Author>): Promise<Author> => {
  const response = await axios.post(API_URL, authorData);
  return response.data;
};

export const updateAuthor = async (id: number, authorData: Partial<Author>): Promise<Author | undefined> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, authorData);
    alert('Author updated successfully');
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(`Error: ${error.response.data.error}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert('No response received from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert(`Error: ${error.message}`);
      }
    } else {
      // Something else happened while setting up the request
      alert(`Unexpected error: ${(error as Error).message}`);
    }
  }
};

export const deleteAuthor = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    alert('Author deleted successfully');
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(`Error: ${error.response.data.error}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert('No response received from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert(`Error: ${error.message}`);
      }
    } else {
      // Something else happened while setting up the request
      alert(`Unexpected error: ${(error as Error).message}`);
    }
  }
};