'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

import styles from './breadcrumbs.module.scss';

export const Breadcrumbs: FC = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((item) => item !== '');

  const links = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;

    const label = segment;
    return { href, label };
  });

  return (
    <nav className={styles.breadcrumbs}>
      <Link className={styles['breadcrumbs-item']} href={'/'}>
        Home
      </Link>
      {links.map((link) => (
        <Link
          className={styles['breadcrumbs-item']}
          key={link.href}
          href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
