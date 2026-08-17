'use client';
import cn from 'classnames';
import { AnimatePresence, LazyMotion, m } from 'motion/react';
import { type FC, useEffect } from 'react';

import { ResetIcon } from '@shared/icons';

import type { ModalPropsType } from '../type';
import styles from './modal.module.scss';

const loadFeatures = () => import('motion/react').then((res) => res.domMin);

const modalVariants = {
  closed: { scale: 0.5, opacity: 0 },
  opened: { scale: 1, opacity: 1 },
};

export const Modal: FC<ModalPropsType> = ({
  className,
  isOpen = false,
  onClose = () => {},
  children,
}) => {
  const modalClassName = cn(styles.modal, className);

  useEffect(() => {
    if (isOpen) document.body.classList.add('scroll-disabled');
    return () => document.body.classList.remove('scroll-disabled');
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <LazyMotion strict features={loadFeatures}>
      <AnimatePresence>
        {isOpen && (
          <div className={modalClassName}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0 }}
              className={styles['modal-overlay']}
              onClick={onClose}
            />
            <m.div
              variants={modalVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className={styles['modal-window']}
              transition={{ duration: 0.1 }}>
              <div className={styles['modal-window-container']}>
                <div className={styles['modal-header']}>
                  <ResetIcon
                    className={styles['modal-close-icon']}
                    onClick={onClose}
                  />
                </div>
                <div className={styles['modal-content']}>{children}</div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};
