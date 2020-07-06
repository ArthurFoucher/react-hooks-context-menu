export interface ContextMenuItem {
  key: string;
  value: string;
}

export interface ContextMenuProps {
  items: ContextMenuItem[];
  onSelect: (item: string) => void;
}
