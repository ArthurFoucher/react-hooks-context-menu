import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  to: React.RefObject<HTMLElement>;
}

export const Portal: React.FC<Props> = ({ to, children }) => {
  return to.current && ReactDOM.createPortal(children, to.current);
};
