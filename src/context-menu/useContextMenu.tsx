import React, { useContext, useState } from 'react';

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
      {active}
    </ContextMenuContext.Provider>
  );
};

export const useContextMenu = () => {
  const context = useContext(ContextMenuContext);

  if (context == null) {
    throw new Error('useContextMenu must be used inside ContextMenuProvider');
  }

  return context;
};
