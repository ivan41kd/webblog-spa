import type { FC } from 'react';
import cn from 'classnames';

import type { TextPropsType } from '../type';

export const Text: FC<TextPropsType> = ({
  tag = 'p',
  className,
  fontSize,
  fontWeight = 'regular',
  children,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(className, {
        [`text-${fontSize}`]: fontSize,
        [`font-${fontWeight}`]: fontWeight,
      })}
    >
      {children}
    </Tag>
  );
};
