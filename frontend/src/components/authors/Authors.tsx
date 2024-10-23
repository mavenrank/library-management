import React from 'react';
import AuthorList from './ListAuthors';
import CreateAuthor from './CreateAuthor';

interface Props {
  action: string;
}

const Authors: React.FC<Props> = ({ action }) => {
  return (
    <div>
      <h2>{action === 'create' ? <CreateAuthor/>  : <AuthorList/> }</h2>
      {/* Add your form or list components here */}
    </div>
  );
};

export default Authors;