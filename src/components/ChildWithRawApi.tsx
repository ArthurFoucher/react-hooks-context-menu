import React from 'react';
import { useShowContextMenu } from '../context-menu/useShowContextMenu';
import { useHideContextMenu } from '../context-menu/useHideContextMenu';
import './Child.css';

interface Props {
  color: string;
}

export const ChildWithRawApi: React.FC<Props> = ({ color, children }) => {
  const { hide, visible } = useHideContextMenu();
  const { show } = useShowContextMenu(`${color}`);

  return (
    <div
      className='child'
      style={{ backgroundColor: color }}
      onClick={visible ? hide : show}
      onContextMenu={(e) => {
        e.preventDefault();
        show(e);
      }}
    >
      {children}
    </div>
  );
};
