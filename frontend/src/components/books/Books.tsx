import React from 'react';
import BookList from './ListBooks';
import CreateBook from './CreateBook';

interface Props {
  action: string;
}

const Books: React.FC<Props> = ({ action }) => {
  return (
    <div>
      <h2>{action === 'create' ? <CreateBook/>  : <BookList/> }</h2>
      {/* Add your form or list components here */}
    </div>
  );
};

export default Books;