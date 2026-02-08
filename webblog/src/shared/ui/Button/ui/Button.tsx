import cn from 'classnames';

import type { ButtonPropsType } from '../type';

import styles from './button.module.scss';

export const Button = ({
  children,
  className = '',
  fontSize = 'lg',
  fontWeight = 'regular',
  variant = 'default',
  onClick,
  size = 'lg',
  isDisabled = false,
}: ButtonPropsType) => {
  const btnClass = cn(className, styles.button, {
    [styles[variant]]: variant !== 'default',
    [styles[size]]: size,
    [`text-${fontSize}`]: fontSize,
    [`font-${fontWeight}`]: fontWeight,
  });

  return (
    <button className={btnClass} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};
