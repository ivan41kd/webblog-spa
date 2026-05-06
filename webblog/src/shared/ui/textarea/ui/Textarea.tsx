import type { FC } from 'react';

import cn from 'classnames';

import type { TextareaPropsType } from '../type/type';
import styles from './textarea.module.scss';

export const Textarea: FC<TextareaPropsType> = ({
  className,
  onChange,
  placeholder = '',
  value = '',
  error,
  size = 'md',
  fontSize = 'md',
  fontWeight = 'regular',
  isDisabled = false,
  readOnly,
  isRequired = false,
  name,
}) => {
  const textAreaClassName = cn(styles.textarea, styles[`textarea-${size}`]);

  return (
    <div className={textAreaClassName}>
      <textarea
        className={cn(
          styles['textarea-field'],
          `text-${fontSize}`,
          `font-${fontWeight}`,
          className
        )}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        readOnly={readOnly}
        name={name}
        required={isRequired}
        onChange={onChange}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};
