import type { FC } from 'react';

import { AppLink } from '../../app-link';

interface NavItem {
  title: string;
  link: string;
  query?: string;
  queryType?: string;
}

interface NavListPropsType {
  listClassName?: string;
  itemClassName?: string;
  itemsList: NavItem[];
}

export const NavList: FC<NavListPropsType> = ({
  listClassName,
  itemClassName,
  itemsList,
}) => {
  return (
    <ul className={listClassName}>
      {itemsList.map(({ title, link }, index) => {
        return (
          <li className={itemClassName} key={link + index}>
            <AppLink title={title} href={link}>
              {title}
            </AppLink>
          </li>
        );
      })}
    </ul>
  );
};
