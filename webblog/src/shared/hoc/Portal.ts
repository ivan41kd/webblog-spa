'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: PropsWithChildren) => {
  const container = document.querySelector('#myportal');
  if (!container) return null;

  return createPortal(children, container);
};
