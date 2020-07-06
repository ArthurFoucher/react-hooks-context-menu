import { useContextMenu } from './useContextMenu';

export const useHideContextMenu = () => {
  const { isActive, setActive } = useContextMenu();

  return {
    visible: isActive,
    hide() {
      setActive(null);
    },
  };
};
