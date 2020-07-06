import React, { useState } from 'react';
import { DefaultContextMenu } from './DefaultContextMenu';
import { ContextMenuProps } from './context-menu.types';

export const LocalContextMenu: React.FC<ContextMenuProps> = ({
  items,
  onSelect,
  children,
}) => {
  const [shown, setShown] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
      onContextMenu={(evt) => {
        evt.preventDefault();
        setShown({
          x: evt.pageX - evt.currentTarget.offsetLeft,
          y: evt.pageY - evt.currentTarget.offsetTop,
        });
      }}
    >
      {children}
      {shown && (
        <div
          style={{
            position: 'absolute',
            top: `${shown.y}px`,
            left: `${shown.x}px`,
          }}
        >
          <DefaultContextMenu
            items={items}
            onSelect={onSelect}
            onHide={() => setShown(null)}
          />
        </div>
      )}
    </div>
  );
};
