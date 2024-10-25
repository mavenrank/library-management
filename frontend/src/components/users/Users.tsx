import React from 'react';
import { Outlet } from 'react-router-dom';

const Users: React.FC = () => {
  return (
    <div>
      <h2>Users</h2>
      <Outlet />
    </div>
  );
};

export default Users;
