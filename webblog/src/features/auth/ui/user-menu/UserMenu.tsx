import cn from 'classnames';
import type { FC } from 'react';

import { useAppSelector } from '@app/hooks';

import { UserIcon } from '@shared/icons';
import { Text } from '@shared/ui';

import { SignoutButton } from './ui/signout-button';
import styles from './user-menu.module.scss';

interface UserMenuPropsType {
  className?: string;
}

export const UserMenu: FC<UserMenuPropsType> = ({ className }) => {
  const { name } = useAppSelector((state) => state.auth);

  return (
    <div className={cn(styles['user-menu'], className)}>
      <UserIcon className={styles['user-menu-icon']} />
      <Text>{name}</Text>
      <SignoutButton />
    </div>
  );
};
