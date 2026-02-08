import cn from 'classnames';

import { Text } from '@/shared/ui';

import styles from './footer.module.scss';

interface FooterPropsType {
  className?: string;
}

export const Footer = ({ className }: FooterPropsType) => {
  const footerClass = cn(className, styles.footer);

  return (
    <footer className={footerClass}>
      <Text>Footer</Text>
    </footer>
  );
};
