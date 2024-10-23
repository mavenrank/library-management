import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../services/api/users'
import { User } from '../../types/User'
import '../../assets/Form.css'

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      //const data = await getAuthors();
      const data: User[] = await getUsers(); // Ensure the data is of type Author[]
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table-container">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Membership Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.membership_date}</td>
              <td>
                <button onClick={() => handleDelete(user.user_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;