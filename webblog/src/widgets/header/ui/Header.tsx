import cn from 'classnames';
import { Link, useNavigate } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Button, Container, Text } from '@/shared/ui';
import { useCookies, useLoading } from '@/shared/lib';
import { CompanyIcon, UserIcon } from '@/shared/icons';
import { NavList } from '@/shared/ui/nav-list/ui/NavList';

import styles from './header.module.scss';

interface HeaderPropsType {
  className?: string;
  navList?: { title: string; link: string }[];
}

export const Header = ({ className, navList }: HeaderPropsType) => {
  const { getCookie, deleteCookie } = useCookies();
  const { isLoading } = useLoading();
  const navigate = useNavigate();
  const headerClass = cn(className, styles.header);

  return (
    <header className={headerClass}>
      <Container>
        <div className={styles['header-wrapper']}>
          <div className={styles['header-main']}>
            <Link to="/" className={styles['header-logo']} aria-label="Home">
              <CompanyIcon className={styles['header-logo']} />
            </Link>

            {isLoading || !navList ? (
              <Skeleton width={200} height={'100%'} />
            ) : (
              <NavList
                itemsList={navList}
                listClassName={styles['header-nav']}
                itemClassName={styles['header-nav-item']}
              />
            )}
          </div>
          {isLoading ? (
            <Skeleton width={100} height={'100%'} />
          ) : !getCookie('user') ? (
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
              <Text>{getCookie('user')['name']}</Text>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  deleteCookie('user', { path: '/' });
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
