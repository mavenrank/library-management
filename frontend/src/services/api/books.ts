import axios from 'axios';
import { Book } from '../../types/Book';

const API_URL = 'http://localhost:5000/api/books';

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBookById = async (id: string): Promise<Book> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createBook = async (bookData: Partial<Book>): Promise<Book> => {
  const response = await axios.post(API_URL, bookData);
  return response.data;
};

export const updateBook = async (id: number, bookData: Partial<Book>): Promise<Book | undefined> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, bookData);
    alert('Book updated successfully');
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

export const deleteBook = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    alert('Book deleted successfully');
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
