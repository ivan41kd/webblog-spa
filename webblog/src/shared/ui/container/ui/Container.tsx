import type { FC } from 'react';

import cn from 'classnames';

import styles from './container.module.scss';

interface ContainerPropsType {
  className?: string;
  children?: React.ReactNode;
}

export const Container: FC<ContainerPropsType> = ({ className, children }) => {
  const containerClass = cn(className, styles.container);

  return <div className={containerClass}>{children}</div>;
};
