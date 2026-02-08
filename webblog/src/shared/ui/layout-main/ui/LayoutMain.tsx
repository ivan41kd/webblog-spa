import cn from 'classnames';

import type { LayoutMainPropsType } from '../type';

import styles from './layout.module.scss';

export const LayoutMain = ({ headerNode, contentNode, footerNode }: LayoutMainPropsType) => {
  const layoutClass = cn(styles.layout);

  return (
    <div className={layoutClass}>
      {headerNode}
      <main className="main">{contentNode}</main>
      {footerNode}
    </div>
  );
};
