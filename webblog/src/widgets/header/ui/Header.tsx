import cn from 'classnames';
import { type FC, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, NavLink, useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { LoginModal, UserMenu } from '@features/auth';

import { CompanyIcon } from '@shared/icons';
import { Button, Container, NavList, Text } from '@shared/ui';

import { fetchHeaderList } from '../model/slice';
import { HeaderMenu } from './header-menu';
import styles from './header.module.scss';

interface HeaderPropsType {
  className?: string;
}

export const Header: FC<HeaderPropsType> = ({ className }) => {
  const { links, isLoading } = useAppSelector((state) => state.header);
  const { isAuth } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
              <LoginModal>
                <Button className={styles['header-login-button']} size="md">
                  <Text>Login</Text>
                </Button>
              </LoginModal>
            ) : (
              <>
                <Button onClick={() => navigate('posts/create')}>
                  Create post
                </Button>
                <UserMenu className={styles['header-user']} />
              </>
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
