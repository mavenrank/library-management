import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHiring, updateHiring } from '../../services/api/hirings';

const EditHiring: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ user_id: '', book_id: '', hire_date: '', return_date: '' });

  useEffect(() => {
    const fetchHiring = async () => {
      try {
        const response = await getHiring(id!);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHiring();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateHiring(id!, formData);
      alert('Hiring updated successfully');
      navigate('/hirings');
    } catch (error) {
      console.error(error);
      alert('Error updating hiring');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User ID: <input type="text" name="user_id" value={formData.user_id} onChange={handleChange} /></label>
      <label>Book ID: <input type="text" name="book_id" value={formData.book_id} onChange={handleChange} /></label>
      <label>Hire Date: <input type="date" name="hire_date" value={formData.hire_date} onChange={handleChange} /></label>
      <label>Return Date: <input type="date" name="return_date" value={formData.return_date} onChange={handleChange} /></label>
      <button type="submit">Update Hiring</button>
    </form>
  );
};

export default EditHiring;