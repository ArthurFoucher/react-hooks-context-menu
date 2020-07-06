import React from 'react';
import { LocalContextMenu } from '../context-menu/LocalContextMenu';
import { ContextMenuItem } from '../context-menu/context-menu.types';
import './Child.css';

interface Props {
  color: string;
}

export const ChildWithLocalWrapper: React.FC<Props> = ({ color, children }) => {
  const items: ContextMenuItem[] = [
    { key: `${color}1`, value: `${color}1` },
    { key: `${color}2`, value: `${color}2` },
    { key: `${color}3`, value: `${color}3` },
  ];

  return (
    <div className='child' style={{ backgroundColor: color }}>
      <LocalContextMenu items={items} onSelect={(key) => console.log(key)}>
        {children}
      </LocalContextMenu>
    </div>
  );
};
