import React from 'react';
import { GlobalContextMenu } from '../context-menu/GlobalContextMenu';
import { ContextMenuItem } from '../context-menu/context-menu.types';
import './Child.css';

interface Props {
  color: string;
}

export const ChildWithWrapper: React.FC<Props> = ({ color, children }) => {
  const items: ContextMenuItem[] = [
    { key: `${color}1`, value: `${color}1` },
    { key: `${color}2`, value: `${color}2` },
    { key: `${color}3`, value: `${color}3` },
  ];

  return (
    <div className='child' style={{ backgroundColor: color }}>
      <GlobalContextMenu items={items} onSelect={(key) => console.log(key)}>
        {children}
      </GlobalContextMenu>
    </div>
  );
};
