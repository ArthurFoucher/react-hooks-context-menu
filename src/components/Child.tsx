import React from 'react';

interface Props {
  color: string;
}

export const Child: React.FC<Props> = ({ color, children }) => {
  return (
    <div
      className='child1'
      style={{
        backgroundColor: color,
        margin: '0 10px',
        flex: 1,
      }}
    >
      {children}
    </div>
  );
};
