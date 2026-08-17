'use client';
import { useAppSelector } from '@/app/hooks/hooks';
import dynamic from 'next/dynamic';
import { type FC, Suspense, lazy, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { UserMenu } from '@features/auth';

import { BurgerIcon } from '@shared/icons';
import { Button } from '@shared/ui';

import { HeaderNavList } from '../header-navlist';
import styles from '../header.module.scss';

const Drawer = lazy(() =>
  import('@shared/ui/drawer').then((module) => ({ default: module.Drawer }))
);

const Portal = dynamic(
  () => import('@shared/hoc/Portal').then((mod) => mod.Portal),
  { ssr: false }
);

export const HeaderBurger: FC = () => {
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

      <Portal>
        <Suspense fallback={'...Loading'}>
          <Drawer onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <div className={styles['header-burger']} onClick={toggleMenu}>
              <div className={styles['header-burger-content']}>
                <HeaderNavList />
              </div>
              <div className={styles['header-burger-footer']}>
                {!isLoading ? (
                  isAuth && <UserMenu className={styles['header-user']} />
                ) : (
                  <Skeleton width={'50%'} height={'100%'} />
                )}
              </div>
            </div>
          </Drawer>
        </Suspense>
      </Portal>
    </>
  );
};
