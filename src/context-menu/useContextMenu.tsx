import React, { useContext, useRef, useState } from 'react';
import { Portal } from './Portal';

interface ContextMenuCoordinates {
  x: number;
  y: number;
}

export const useContextMenu = () => {
  const [coordinates, setCoordinates] = useState<ContextMenuCoordinates | null>(
    null,
  );
  const context = useContext(ContextMenuContext);

  if (context == null) {
    throw new Error('useContextMenu must be used inside ContextMenuProvider');
  }

  const Container: React.FC = ({ children }) => (
    <Portal to={context.ref}>
      {coordinates && (
        <div
          style={{
            position: 'absolute',
            top: coordinates.y,
            left: coordinates.x,
          }}
        >
          {children}
        </div>
      )}
    </Portal>
  );

  return [
    Container,
    {
      showContextMenu: (e: React.MouseEvent) => {
        setCoordinates({
          x: e.clientX,
          y: e.clientY,
        });
      },
      hideContextMenu: () => setCoordinates(null),
    },
  ] as const;
};

const ContextMenuContext = React.createContext<{
  ref: React.RefObject<HTMLElement>;
} | null>(null);

export const ContextMenuProvider: React.FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ContextMenuContext.Provider value={{ ref }}>
      {children}
      <div ref={ref} />
    </ContextMenuContext.Provider>
  );
};
