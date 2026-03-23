import type { FC } from 'react';
import { NavLink } from 'react-router';

interface NavListPropsType {
  listClassName?: string;
  itemClassName?: string;
  itemsList: { title: string; link: string }[];
}

export const NavList: FC<NavListPropsType> = ({ listClassName, itemClassName, itemsList }) => {
  return (
    <ul className={listClassName}>
      {itemsList.map(({ title, link }) => (
        <NavLink
          to={link}
          key={title}
          className={({ isActive }) => (isActive ? `${itemClassName} active` : itemClassName)}
        >
          <li key={title}>{title}</li>
        </NavLink>
      ))}
    </ul>
  );
};
