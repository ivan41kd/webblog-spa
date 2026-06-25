import cn from 'classnames';
import { type FC, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, NavLink } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { LoginButton, UserMenu } from '@features';

import { CompanyIcon } from '@shared/icons';
import { Container, NavList } from '@shared/ui';

import { fetchHeaderList } from '../model/slice';
import styles from './header.module.scss';
import { HeaderMenu } from './ui';

interface HeaderPropsType {
  className?: string;
}

export const Header: FC<HeaderPropsType> = ({ className }) => {
  const { links, isLoading } = useAppSelector((state) => state.header);
  const { isAuth } = useAppSelector((state) => state.auth);

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
  }, [dispatch]);

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
          <nav className={styles['header-nav']}>
            {isLoading ? (
              <Skeleton width={300} />
            ) : (
              <NavList
                itemsList={links}
                listClassName={styles['header-nav-list']}
                itemClassName={styles['header-nav-item']}
              />
            )}
          </nav>
          <div className={styles['header-menu']}>
            {isLoading ? (
              <Skeleton width={100} height={'100%'} />
            ) : !isAuth ? (
              <LoginButton />
            ) : (
              <UserMenu className={styles['header-user']} />
            )}
            <HeaderMenu
              navSlot={
                <NavList
                  itemsList={links}
                  listClassName={styles['header-nav-list']}
                  itemClassName={styles['header-nav-item']}
                />
              }
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
