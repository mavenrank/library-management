import React from 'react';
import { Outlet } from 'react-router-dom';

const Authors: React.FC = () => {
  return (
    <div>
      <h2>Authors</h2>
      <Outlet />
    </div>
  );
};

export default Authors;
