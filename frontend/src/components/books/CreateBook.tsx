import React, { useState } from 'react';
import { createBook } from '../../services/api/books';
import { Book } from '../../types/Book'
import '../../assets/Form.css'

const CreateBook: React.FC = () => {
  //const [formData, setFormData] = useState({ name: '', bio: '', date_of_birth: '' });
  const [formData, setFormData] = useState<Partial<Book>>(
    { genre: '', isbn: '', publication_year: '', title: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //await createAuthor(formData);
      await createBook(formData as Book);
      alert('Book created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating book');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Title:</label>
        <input type="text" name="title" onChange={handleChange} value={formData.title} required />

        <label>ISBN:</label>
        <input type="text" name="isbn" onChange={handleChange} value={formData.isbn} required />

        <label>Genre:</label>
        <input type="text" name="genre" onChange={handleChange} value={formData.genre} required />        
         
        <label>Publication Year:</label>
        <input type="date" name="publication_year" onChange={handleChange} value={formData.publication_year} required />

        <label>Author:</label>
        <input type="string" name="Author" onChange={handleChange} value={formData.author_id} required />
    
        <button type="submit">Create Author</button>
      </form>
    </div>
  );
};

export default CreateBook;