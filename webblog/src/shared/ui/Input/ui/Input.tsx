import { useState, type FC } from 'react';
import cn from 'classnames';

import { EyeClosedIcon, EyeOpenedIcon, EmailIcon, SearchIcon } from '@shared/icons';

import type { InputPropsType } from '../type';
import styles from './input.module.scss';

export const Input: FC<InputPropsType> = ({
  className,
  value = '',
  name = 'input',
  onChange,
  placeholder = '',
  error,
  size = 'md',
  fontSize = 'md',
  fontWeight = 'regular',
  type = 'text',
  isDisabled = false,
  readOnly,
  isRequired = false,
  icon = null,
  iconPlace = 'left',
  variant = 'default',
  onBlur,
}) => {
  const [isVisible, setIsVisible] = useState(type === 'text');

  const inputClass = cn(styles.input, styles[`input-${size}`], {
    [styles['input-password']]: type === 'password',
    [styles['input-email']]: type === 'email',
    [styles['input-search']]: type === 'search',
    [styles['input-icon-left']]: icon && iconPlace === 'left',
    [styles['input-icon-right']]: icon && iconPlace === 'right',
  });

  return (
    <div className={inputClass}>
      {icon && iconPlace === 'left' && type !== 'email' && (
        <i className={`${styles[`input-icon`]}`}>{icon}</i>
      )}
      <div className={cn(styles[`input-wrapper`])}>
        {type === 'email' && (
          <i className={`${styles[`input-email-icon`]}`}>
            <EmailIcon />
          </i>
        )}

        {type === 'search' && (
          <i className={`${styles[`input-search-icon`]}`}>
            <SearchIcon />
          </i>
        )}

        <input
          className={cn(
            styles['input-field'],
            `text-${fontSize}`,
            `font-${fontWeight}`,
            className,
            {
              [styles[`input-${variant}`]]: variant !== 'default',
            }
          )}
          defaultValue={value}
          placeholder={placeholder}
          type={
            type === 'email' ? type : type === 'password' ? (isVisible ? 'text' : 'password') : type
          }
          minLength={(type === 'password' && 8) || 0}
          disabled={isDisabled}
          readOnly={readOnly}
          name={name}
          required={isRequired}
          onChange={onChange}
          onBlur={onBlur}
        />

        {icon && iconPlace === 'right' && type !== 'password' && (
          <i className={`${styles[`input-icon`]}`}>{icon}</i>
        )}
        {type === 'password' && (
          <i
            className={`${styles['input-password-icon']}`}
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
          </i>
        )}
      </div>
      {error && <span className={styles['input-error']}>{error}</span>}
    </div>
  );
};
