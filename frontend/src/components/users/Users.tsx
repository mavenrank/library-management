import React from 'react';
import UserList from './ListUsers';
import CreateUser from './CreateUser';

interface Props {
  action: string;
}

const Users: React.FC<Props> = ({ action }) => {
  return (
    <div>
      <h2>{action === 'create' ? <CreateUser/>  : <UserList/> }</h2>
      {/* Add your form or list components here */}
    </div>
  );
};

export default Users;