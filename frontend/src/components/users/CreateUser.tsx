import React, { useState } from 'react';
import { createUser } from '../../services/api/users';
import { User } from '../../types/User'
import '../../assets/Form.css'

const CreateUser: React.FC = () => {
  const [formData, setFormData] = useState<Partial<User>>(
    { name: '', email: '', membership_date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //await createAuthor(formData);
      await createUser(formData as User);
      alert('User created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating User');
    }
  };

  return (
    <div className="form-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={formData.name} required />

        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} value={formData.email} required />

        <label>Membership Date:</label>
        <input type="text" name="membership_date" onChange={handleChange} value={formData.membership_date} required />

        <button type="submit">Create Author</button>
      </form>
    </div>
  );
};

export default CreateUser;