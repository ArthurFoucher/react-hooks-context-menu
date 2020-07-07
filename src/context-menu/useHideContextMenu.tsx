import { useContextMenu } from './useContextMenu';

export const useHideContextMenu = () => {
  const { setActive } = useContextMenu();

  return {
    hide() {
      setActive(null);
    },
  };
};
