import cn from 'classnames';

import type { TextPropsType } from '../type';

export const Text = ({
  tag = 'p',
  className,
  fontSize,
  fontWeight = 'regular',
  children,
}: TextPropsType) => {
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
