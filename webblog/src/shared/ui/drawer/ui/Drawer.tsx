import { ResetIcon } from '@/shared/icons';
import { type FC, type ReactNode, useEffect } from 'react';

import styles from './drawer.module.scss';

interface DrawerPropsType {
  children: ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
}

export const Drawer: FC<DrawerPropsType> = ({
  onClose = () => {},
  children,
  isOpen = false,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('scroll-disabled');

    return () => {
      document.body.classList.remove('scroll-disabled');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    isOpen && (
      <div className={styles['drawer']}>
        <div className={styles['drawer-overlay']} onClick={onClose} />
        <div className={styles['drawer-wrapper']}>
          <div className={styles['drawer-header']}>
            <ResetIcon
              className={styles['drawer-close-icon']}
              onClick={onClose}
            />
          </div>

          <div className={styles['drawer-content']}>{children}</div>
        </div>
      </div>
    )
  );
};
