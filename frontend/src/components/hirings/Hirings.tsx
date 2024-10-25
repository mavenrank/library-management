import React from 'react';
import { Outlet } from 'react-router-dom';

const Hiring: React.FC = () => {
  return (
    <div>
      <h2>Hiring</h2>
      <Outlet />
    </div>
  );
};

export default Hiring;
