import cn from 'classnames';
import { NavLink } from 'react-router';

import { Container, Text } from '@/shared/ui';

import styles from './header.module.scss';

interface HeaderPropsType {
  className?: string;
}

export const Header = ({ className }: HeaderPropsType) => {
  const headerClass = cn(className, styles.header);

  return (
    <header className={headerClass}>
      <Container>
        <div className={styles['header-wrapper']}>
          <Text>Header</Text>

          <nav className={styles['header-nav']}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/home2">Home2</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};
