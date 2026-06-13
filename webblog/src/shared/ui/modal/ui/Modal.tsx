import { type FC, useEffect } from 'react';

import { ResetIcon } from '@shared/icons';

import type { ModalPropsType } from '../type';
import styles from './modal.module.scss';

export const Modal: FC<ModalPropsType> = ({ onClose = () => {}, children }) => {
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

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
    <div className={styles.modal}>
      <div className={styles['modal-overlay']} onClick={onClose} />
      <div className={styles['modal-window']}>
        <div className={styles['modal-window-container']}>
          <div className={styles['modal-header']}>
            <ResetIcon
              className={styles['modal-close-icon']}
              onClick={onClose}
            />
          </div>
          <div className={styles['modal-content']}>{children}</div>
        </div>
      </div>
    </div>
  );
};
