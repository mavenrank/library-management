import React from 'react';
import HiringList from './HiringList';
import CreateHiring from './CreateHiring';

interface Props {
  action: string;
}

const Hirings: React.FC<Props> = ({ action }) => {
  return (
    <div>
      <h2>{action === 'create' ? <CreateHiring/>  : <HiringList/> }</h2>
      {/* Add your form or list components here */}
    </div>
  );
};

export default Hirings;