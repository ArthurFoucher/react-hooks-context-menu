import React from 'react';
import { Child } from './Child';

export const Parent: React.FC = () => {
  return (
    <div
      className='parent'
      style={{
        padding: '30px',
        display: 'flex',
        justifyContent: 'space-around',
        height: '200px',
      }}
    >
      <Child color='aliceblue'>aliceblue</Child>
      <Child color='cornflowerblue'>cornflowerblue</Child>
      <Child color='lightpink'>lightpink</Child>
    </div>
  );
};
