import { useContextMenu } from './useContextMenu';

export const useContextMenuState = () => {
  const { isActive } = useContextMenu();

  return {
    visible: isActive,
  };
};
