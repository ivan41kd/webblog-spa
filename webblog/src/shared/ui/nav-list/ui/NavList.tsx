import { NavLink } from 'react-router';

interface NavListPropsType {
  listClassName?: string;
  itemClassName?: string;
  itemsList: { title: string; link: string }[];
}

export const NavList = ({ listClassName, itemClassName, itemsList }: NavListPropsType) => {
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
