import cn from 'classnames';

import { Fragment } from 'react/jsx-runtime';

import styles from '../../ui.module.scss';
interface UiListTypeProps {
  items: React.ReactNode[];
  placement?: 'start' | 'center' | 'end';
  className?: string;
}

export const UiList = ({ items, placement = 'start', className = 'ui-list' }: UiListTypeProps) => {
  return (
    <div className={cn(styles[`ui-items`], styles[placement], className)}>
      {items.map((item, index: number) => (
        <Fragment key={`${className}-${index}`}>{item}</Fragment>
      ))}
    </div>
  );
};
