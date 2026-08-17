import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = ({ children }: PropsWithChildren) => {
  const container = document.querySelector('#myportal');
  if (!container) return null;

  return createPortal(children, container);
};
