import React from 'react';
import { Outlet } from 'react-router-dom';

const Books: React.FC = () => {
  return (
    <div>
      <h2>Books</h2>
      <Outlet />
    </div>
  );
};

export default Books;
