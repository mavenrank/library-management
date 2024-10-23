import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllHirings, deleteHiring } from '../../services/api';

const HiringList: React.FC = () => {
  const [hirings, setHirings] = useState<any[]>([]);

  useEffect(() => {
    const fetchHirings = async () => {
      try {
        const response = await getAllHirings();
        setHirings(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHirings();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteHiring(id);
      setHirings(hirings.filter(hiring => hiring.id !== id));
      alert('Hiring deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting hiring');
    }
  };

  return (
    <div>
      <h1>Hiring List</h1>
      <Link to="/create">Create New Hiring</Link>
      <ul>
        {hirings.map(hiring => (
          <li key={hiring.id}>
            {hiring.user_id} - {hiring.book_id} - {hiring.hire_date} - {hiring.return_date}
            <Link to={`/edit/${hiring.id}`}>Edit</Link>
            <button onClick={() => handleDelete(hiring.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HiringList;