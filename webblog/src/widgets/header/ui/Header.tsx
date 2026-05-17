import { useEffect, type FC } from 'react';

import Skeleton from 'react-loading-skeleton';

import { Link, NavLink } from 'react-router';

import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { LoginButton, SignoutButton } from '@features';

import { CompanyIcon, UserIcon } from '@shared/icons';
import { useLocalStorage } from '@shared/lib';
import { Container, NavList, Text } from '@shared/ui';

import { fetchHeaderList } from '../model/slice';
import styles from './header.module.scss';

interface HeaderPropsType {
  className?: string;
}

export const Header: FC<HeaderPropsType> = ({ className }) => {
  const { getItem } = useLocalStorage();
  const { links, isLoading } = useAppSelector((state) => state.header);
  const dispatch = useAppDispatch();

  const headerClass = cn(className, styles.header);

  useEffect(() => {
    dispatch(
      fetchHeaderList([
        { title: 'Coffee', link: '/home?type=coffee' },
        {
          title: 'Weekend',
          link: '/home?type=weekend',
        },
        { title: 'Code', link: '/home?type=code' },
      ])
    );
  }, []);

  return (
    <header className={headerClass}>
      <Container>
        <div className={styles['header-wrapper']}>
          <div className={styles['header-main']}>
            <Link to="/" className={styles['header-logo']} aria-label="Home">
              <CompanyIcon className={styles['header-logo']} />
            </Link>
            <NavLink
              to={'/home'}
              className={({ isActive }) =>
                cn(styles['header-home'], isActive && 'active')
              }>
              Home
            </NavLink>
          </div>
          {isLoading ? (
            <Skeleton width={300} />
          ) : (
            <NavList
              itemsList={links}
              listClassName={styles['header-nav']}
              itemClassName={styles['header-nav-item']}
            />
          )}
          {isLoading ? (
            <Skeleton width={100} />
          ) : !getItem('user') ? (
            <LoginButton />
          ) : (
            <div className={styles['header-user']}>
              <UserIcon className={styles['header-user-icon']} />
              <Text>
                {getItem('user') && JSON.parse(getItem('user') as string).name}
              </Text>
              <SignoutButton />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
