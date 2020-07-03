import React from 'react';
import { useContextMenu } from '../context-menu/useContextMenu';

interface Props {
  color: string;
}

export const Child: React.FC<Props> = ({ color, children }) => {
  const { show, hide, visible } = useContextMenu(<>Test {color}</>);
  return (
    <div
      style={{
        backgroundColor: color,
        margin: '0 10px',
        flex: 1,
      }}
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
