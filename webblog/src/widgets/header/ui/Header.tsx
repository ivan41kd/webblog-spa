import cn from 'classnames';
import Link from 'next/link';
import { type FC } from 'react';

import { StoreInitializer } from '@app/StoreInitilization';

import { CompanyIcon } from '@shared/icons';
import { Container } from '@shared/ui';

import { fetchHeaderList } from '../model/slice';
import { HeaderAuth } from './header-auth';
import { HeaderBurger } from './header-burger';
import { HeaderNavList } from './header-navlist';
import styles from './header.module.scss';

interface HeaderPropsType {
  className?: string;
}
const navItems = [
  { title: 'Coffee', link: '/home?type=coffee' },
  { title: 'Weekend', link: '/home?type=weekend' },
  { title: 'Code', link: '/home?type=code' },
];
export const Header: FC<HeaderPropsType> = ({ className }) => {
  const headerClass = cn(className, styles.header);

  return (
    <StoreInitializer
      initialize={(store) => store.dispatch(fetchHeaderList(navItems))}>
      <header className={headerClass}>
        <Container>
          <div className={styles['header-wrapper']}>
            <div className={styles['header-main']}>
              <Link
                href="/"
                className={styles['header-logo']}
                aria-label="Home">
                <CompanyIcon className={styles['header-logo']} />
              </Link>
              <Link href="/home">Home</Link>
            </div>
            <nav className={styles['header-nav']}>
              <HeaderNavList />
            </nav>
            <div className={styles['header-menu']}>
              <HeaderAuth />
              <HeaderBurger />
            </div>
          </div>
        </Container>
      </header>
    </StoreInitializer>
  );
};
