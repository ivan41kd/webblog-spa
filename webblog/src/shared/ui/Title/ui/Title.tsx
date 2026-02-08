import cn from 'classnames';

import type { TitlePropsType } from '../type';
export const Title = ({
  tag = 'h1',
  className,
  children,
  fontSize = 'xl',
  fontWeight = 'regular',
}: TitlePropsType) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(className, {
        [`title-${fontSize}`]: fontSize,
        [`font-${fontWeight}`]: fontWeight,
      })}
    >
      {children}
    </Tag>
  );
};
