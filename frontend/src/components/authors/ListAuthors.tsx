import React, { useState, useEffect } from 'react';
import { getAuthors, deleteAuthor } from '../../services/api/authors'
import { Author } from '../../types/Author'
import '../../assets/Form.css'

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      //const data = await getAuthors();
      const data: Author[] = await getAuthors(); // Ensure the data is of type Author[]
      setAuthors(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAuthor(id);
      fetchAuthors();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table-container">
      <h2>Author List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bio</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.author_id}>
              <td>{author.name}</td>
              <td>{author.bio}</td>
              <td>{author.date_of_birth}</td>
              <td>
                <button onClick={() => handleDelete(author.author_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
