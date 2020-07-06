import React, { useContext, useState } from 'react';

export const useContextMenu = (Element: React.ReactNode) => {
  const context = useContext(ContextMenuContext);

  if (context == null) {
    throw new Error('useContextMenu must be used inside ContextMenuProvider');
  }

  return {
    visible: context.isActive,
    show: (e: React.MouseEvent) =>
      context.setActive(
        <div
          style={{
            position: 'absolute',
            top: e.clientY,
            left: e.clientX,
          }}
        >
          {Element}
        </div>,
      ),
    hide: () => context.setActive(null),
  };
};

const ContextMenuContext = React.createContext<{
  isActive: boolean;
  setActive: (Element: React.ReactNode) => void;
} | null>(null);

export const ContextMenuProvider: React.FC = ({ children }) => {
  const [active, setActive] = useState<React.ReactNode | null>(null);

  return (
    <ContextMenuContext.Provider
      value={{ setActive, isActive: active != null }}
    >
      {children}
      <div>{active}</div>
    </ContextMenuContext.Provider>
  );
};
