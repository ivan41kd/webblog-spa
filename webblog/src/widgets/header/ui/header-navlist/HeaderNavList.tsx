import { useAppSelector } from '@/app/hooks/hooks';
import type { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { NavList } from '@shared/ui';

import styles from '../header.module.scss';

export const HeaderNavList: FC = () => {
  const { links, isLoading } = useAppSelector((state) => state.header);

  return isLoading ? (
    <Skeleton width={300} />
  ) : (
    <NavList
      itemsList={links}
      listClassName={styles['header-nav-list']}
      itemClassName={styles['header-nav-item']}
    />
  );
};
