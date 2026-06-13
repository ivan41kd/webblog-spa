import cn from 'classnames';
import type { FC } from 'react';

import styles from './section.module.scss';

interface SectionTypeProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: FC<SectionTypeProps> = ({
  children,
  className = '',
}: SectionTypeProps) => {
  const sectionClass = cn(className, styles.section);

  return <section className={sectionClass}>{children}</section>;
};
