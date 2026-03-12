import { memo } from 'react';
import cn from 'classnames';

import type { ButtonPropsType } from '../type';
import styles from './button.module.scss';

export const Button = memo(
  ({
    children,
    className = '',
    fontSize = 'md',
    fontWeight = 'regular',
    variant = 'default',
    onClick,
    size = 'md',
    isDisabled = false,
    isSubmit = false,
  }: ButtonPropsType) => {
    const btnClass = cn(className, styles.button, {
      [styles[variant]]: variant !== 'default',
      [styles[size]]: size,
      [`text-${fontSize}`]: fontSize,
      [`font-${fontWeight}`]: fontWeight,
    });

    return (
      <button
        className={btnClass}
        disabled={isDisabled}
        type={isSubmit ? 'submit' : 'button'}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
