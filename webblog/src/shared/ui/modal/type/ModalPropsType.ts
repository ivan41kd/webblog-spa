import type { PropsWithChildren } from 'react';

export interface ModalPropsType extends PropsWithChildren {
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
}
