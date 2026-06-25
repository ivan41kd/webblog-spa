import cn from 'classnames';
import type { FC } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router';

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
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const allParams = Object.fromEntries(searchParams.entries());
  const titleInQuery = Object.values(allParams).includes(title.toLowerCase());
  const hasQueryParams = Object.keys(allParams).length > 0;

  const linkClassName = cn(className, {
    active: hasQueryParams
      ? titleInQuery
      : location.pathname.slice(1) === title.toLowerCase(),
  });

  return (
    <Link className={linkClassName} to={href}>
      {children}
    </Link>
  );
};
