import { AnimatePresence, LazyMotion, m } from 'motion/react';
import { type FC, type ReactNode, useEffect } from 'react';

import { ResetIcon } from '@shared/icons';

import styles from './drawer.module.scss';

interface DrawerPropsType {
  children: ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
}

const loadFeatures = () => import('motion/react').then((res) => res.domMax);

const drawerVariants = {
  closed: { x: '-100%' },
  opened: { x: 0 },
};

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
    <LazyMotion strict features={loadFeatures}>
      <AnimatePresence>
        {isOpen && (
          <div className={styles['drawer']}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className={styles['drawer-overlay']}
              onClick={onClose}
            />

            <m.div
              variants={drawerVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0.7, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -120 || info.velocity.x < -300) {
                  onClose();
                }
              }}
              transition={{ type: 'spring', stiffness: 360, damping: 40 }}
              className={styles['drawer-wrapper']}>
              <div className={styles['drawer-header']}>
                <ResetIcon
                  className={styles['drawer-close-icon']}
                  onClick={onClose}
                />
              </div>

              <div className={styles['drawer-content']} draggable={false}>
                {children}
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};
