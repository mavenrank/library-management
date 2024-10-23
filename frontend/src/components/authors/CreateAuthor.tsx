import React, { useState } from 'react';
import { createAuthor } from '../../services/api/authors';
import { Author } from '../../types/Author'
import '../../assets/Form.css'

const CreateAuthor: React.FC = () => {
  //const [formData, setFormData] = useState({ name: '', bio: '', date_of_birth: '' });
  const [formData, setFormData] = useState<Partial<Author>>({ name: '', bio: '', date_of_birth: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //await createAuthor(formData);
      await createAuthor(formData as Author);
      alert('Author created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating author');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Author</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={formData.name} required />
        
        <label>Bio:</label>
        <input type="text" name="bio" onChange={handleChange} value={formData.bio} required />
        
        <label>Date of Birth:</label>
        <input type="date" name="date_of_birth" onChange={handleChange} value={formData.date_of_birth} required />
        
        <button type="submit">Create Author</button>
      </form>
    </div>
  );
};

export default CreateAuthor;