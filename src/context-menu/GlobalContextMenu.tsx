import React from 'react';
import { DefaultContextMenu } from './DefaultContextMenu';
import { ContextMenuProps } from './context-menu.types';
import { useShowContextMenu } from './useShowContextMenu';
import { useHideContextMenu } from './useHideContextMenu';

export const GlobalContextMenu: React.FC<ContextMenuProps> = ({
  items,
  onSelect,
  children,
}) => {
  const { hide } = useHideContextMenu();
  const { show } = useShowContextMenu(
    <DefaultContextMenu items={items} onSelect={onSelect} onHide={hide} />,
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        show(e);
      }}
    >
      {children}
    </div>
  );
};
