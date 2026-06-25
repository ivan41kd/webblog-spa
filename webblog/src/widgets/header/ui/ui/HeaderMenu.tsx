import { type FC, type ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import { useAppSelector } from '@app/store/rootReducer';

import { UserMenu } from '@features/auth/ui/user-menu';

import { BurgerIcon } from '@shared/icons';
import { Button, Drawer } from '@shared/ui';

import styles from '../header.module.scss';

interface HeaderMenuPropsType {
  navSlot: ReactNode;
}

export const HeaderMenu: FC<HeaderMenuPropsType> = ({ navSlot }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useAppSelector((state) => state.auth);

  const handleNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a')) {
      setIsOpen(false);
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
        <Drawer onClose={() => setIsOpen(false)} isOpen={isOpen}>
          <div className={styles['header-burger']}>
            <div
              className={styles['header-burger-content']}
              onClick={handleNavClick}>
              {navSlot}
            </div>

            {isAuth && <UserMenu className={styles['header-user']} />}
          </div>
        </Drawer>,
        document.body
      )}
    </>
  );
};
