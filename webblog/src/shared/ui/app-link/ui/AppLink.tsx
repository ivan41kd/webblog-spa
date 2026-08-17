'use client';
import cn from 'classnames';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { FC } from 'react';

interface AppLinkPropsType {
  title: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const AppLink: FC<AppLinkPropsType> = ({
  title,
  href,
  className,
  children,
}) => {
  const searchParams = useSearchParams();

  const allParams = Object.fromEntries(searchParams.entries());
  const titleInQuery = Object.values(allParams).includes(title.toLowerCase());
  const hasQueryParams = Object.keys(allParams).length > 0;

  const linkClassName = cn(className, {
    active: hasQueryParams
      ? titleInQuery
      : location.pathname.slice(1) === title.toLowerCase(),
  });

  return (
    <Link className={linkClassName} href={href}>
      {children}
    </Link>
  );
};
