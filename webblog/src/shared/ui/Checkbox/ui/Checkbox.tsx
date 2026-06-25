import cn from 'classnames';
import type { FC } from 'react';

import type { CheckboxPropsType } from '../type';
import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckboxPropsType> = ({
  className = '',
  name = 'checkbox',
  value,
  isChecked = false,
  isDisabled,
  isRequired = false,
  size = 'md',
  variant = 'brand',
  onChange,
}) => {
  const chkClass = cn(
    className,
    styles.checkbox,
    styles[`checkbox-${variant}`],
    styles[`checkbox-${size}`]
  );

  return (
    <input
      type="checkbox"
      className={chkClass}
      name={name}
      defaultValue={value}
      defaultChecked={isChecked}
      disabled={isDisabled}
      required={isRequired}
      onChange={onChange}
    />
  );
};
