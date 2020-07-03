import React from 'react';
import { Parent } from './components/Parent';
import { ContextMenuProvider } from './context-menu/useContextMenu';

export const App = () => {
  return (
    <ContextMenuProvider>
      <Parent />
    </ContextMenuProvider>
  );
};
