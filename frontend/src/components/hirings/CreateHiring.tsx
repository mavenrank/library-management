import React, { useState } from 'react';
import { createHiring } from '../../services/api/hirings'

const CreateHiring: React.FC = () => {
  const [formData, setFormData] = useState({ user_id: '', book_id: '', hire_date: '', return_date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createHiring(formData);
      alert('Hiring created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating hiring');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User ID: <input type="text" name="user_id" onChange={handleChange} /></label>
      <label>Book ID: <input type="text" name="book_id" onChange={handleChange} /></label>
      <label>Hire Date: <input type="date" name="hire_date" onChange={handleChange} /></label>
      <label>Return Date: <input type="date" name="return_date" onChange={handleChange} /></label>
      <button type="submit">Create Hiring</button>
    </form>
  );
};

export default CreateHiring;