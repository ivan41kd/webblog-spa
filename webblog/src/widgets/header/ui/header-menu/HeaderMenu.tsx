import { type FC, type ReactNode, Suspense, lazy, useState } from 'react';
import { createPortal } from 'react-dom';
import Skeleton from 'react-loading-skeleton';

import { useAppSelector } from '@app/store/rootReducer';

import { UserMenu } from '@features/auth';

import { BurgerIcon } from '@shared/icons';
import { Button } from '@shared/ui';

import styles from '../header.module.scss';

const Drawer = lazy(() =>
  import('@shared/ui/drawer').then((module) => ({ default: module.Drawer }))
);

interface HeaderMenuPropsType {
  navSlot: ReactNode;
}

export const HeaderMenu: FC<HeaderMenuPropsType> = ({ navSlot }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useAppSelector((state) => state.auth);
  const { isLoading } = useAppSelector((state) => state.header);

  const toggleMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <Button
        className={styles['header-burger-button']}
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <BurgerIcon className={styles['header-burger-icon']} />
      </Button>
      {createPortal(
        <Suspense fallback={null}>
          <Drawer onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <div className={styles['header-burger']} onClick={toggleMenu}>
              <div className={styles['header-burger-content']}>{navSlot}</div>
              <div className={styles['header-burger-footer']}>
                {!isLoading ? (
                  isAuth && <UserMenu className={styles['header-user']} />
                ) : (
                  <Skeleton width={'50%'} height={'100%'} />
                )}
              </div>
            </div>
          </Drawer>
        </Suspense>,
        document.body
      )}
    </>
  );
};
