import React from 'react';
import { useContextMenu } from './useContextMenu';

export const useShowContextMenu = (Element: React.ReactNode) => {
  const { setActive } = useContextMenu();

  return {
    show(e: React.MouseEvent) {
      setActive(
        <div
          style={{
            position: 'absolute',
            top: e.pageY,
            left: e.pageX,
          }}
        >
          {Element}
        </div>,
      );
    },
  };
};
