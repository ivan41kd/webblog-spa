import type { FC } from 'react';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Button, Container, Text } from '@/shared/ui';
import { useLocalStorage, useLoading } from '@/shared/lib';
import { CompanyIcon, UserIcon } from '@/shared/icons';
import { NavList } from '@/shared/ui/nav-list/ui/NavList';

import styles from './header.module.scss';

interface HeaderPropsType {
  className?: string;
}

export const Header: FC<HeaderPropsType> = ({ className }) => {
  const { getItem, removeItem } = useLocalStorage();
  const { isLoading } = useLoading();
  const navigate = useNavigate();
  const headerClass = cn(className, styles.header);

  const listLinks = [{ title: 'Home', link: '/home' }];

  return (
    <header className={headerClass}>
      <Container>
        <div className={styles['header-wrapper']}>
          <div className={styles['header-main']}>
            <Link to="/" className={styles['header-logo']} aria-label="Home">
              <CompanyIcon className={styles['header-logo']} />
            </Link>

            {isLoading || !listLinks ? (
              <Skeleton width={200} height={'100%'} />
            ) : (
              <NavList
                itemsList={listLinks}
                listClassName={styles['header-nav']}
                itemClassName={styles['header-nav-item']}
              />
            )}
          </div>
          {isLoading ? (
            <Skeleton width={100} height={'100%'} />
          ) : !getItem('user') ? (
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </Button>
          ) : (
            <div className={styles['header-user']}>
              <UserIcon className={styles['header-user-icon']} />
              <Text>{getItem('user') && JSON.parse(getItem('user') as string).name}</Text>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  removeItem('user');
                  navigate('/');
                }}
                className="btn btn-sm"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
