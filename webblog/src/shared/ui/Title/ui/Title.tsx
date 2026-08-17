import cn from 'classnames';
import type { FC } from 'react';

import type { TitlePropsType } from '../type';

export const Title: FC<TitlePropsType> = ({
  tag = 'h1',
  className,
  children,
  fontSize = 'xl',
  fontWeight = 'regular',
}) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(className, {
        [`title-${fontSize}`]: fontSize,
        [`font-${fontWeight}`]: fontWeight,
      })}>
      {children}
    </Tag>
  );
};
