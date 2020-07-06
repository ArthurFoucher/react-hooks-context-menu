import React from 'react';
import { ContextMenuItem } from './context-menu.types';

export interface Props {
  items: ContextMenuItem[];
  onSelect: (item: string) => void;
  onHide: () => void;
}

export const DefaultContextMenu: React.FC<Props> = ({
  items,
  onSelect,
  onHide,
}) => {
  return (
    <div>
      {items.map(({ key, value }) => (
        <div
          key={key}
          onClick={() => {
            onSelect(key);
            onHide();
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};
