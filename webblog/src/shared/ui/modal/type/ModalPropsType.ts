import type { ReactNode } from 'react';

export interface ModalPropsType {
  children: ReactNode;
  onClose?: () => void;
}
