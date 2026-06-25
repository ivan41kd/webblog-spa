import classNames from 'classnames';
import type { FC } from 'react';
import { Link, type UIMatch, useLocation, useMatches } from 'react-router';

import { Text } from '@shared/ui';

import styles from './breadcrumbs.module.scss';

interface Breadcrumb {
  label: string;
  link: string;
}

interface handleCrumb {
  crumb: (data: unknown) => Breadcrumb;
}

export const Breadcrumbs: FC = () => {
  const matches = useMatches();
  const { pathname } = useLocation();

  const links = (matches as UIMatch<unknown, handleCrumb>[])
    .filter((match) => typeof match.handle?.crumb === 'function')
    .map((match) => {
      return match.handle.crumb(match.params);
    });

  return (
    <nav className={styles.breadcrumbs}>
      {links.map((link) => (
        <Link
          className={classNames(styles['breadcrumbs-item'], {
            active: link.link === pathname,
          })}
          to={link.link}
          key={link.link}>
          <Text>{link.label}</Text>
        </Link>
      ))}
    </nav>
  );
};
