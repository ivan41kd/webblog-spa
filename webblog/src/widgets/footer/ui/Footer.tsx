import type { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from '@/shared/ui';

import styles from './footer.module.scss';

interface FooterPropsType {
  className?: string;
}

export const Footer: FC<FooterPropsType> = ({ className }) => {
  const footerClass = cn(className, styles.footer);

  return (
    <footer className={footerClass}>
      <Container>
        <div className={styles['footer-wrapper']}>
          <Text>Footer</Text>
        </div>
      </Container>
    </footer>
  );
};
