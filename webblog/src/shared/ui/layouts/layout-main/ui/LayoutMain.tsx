import cn from 'classnames';

import type { LayoutMainPropsType } from '../type';

import styles from './layout.module.scss';
import { Container } from '@/shared/ui/container';

export const LayoutMain = ({ headerNode, contentNode, footerNode }: LayoutMainPropsType) => {
  const layoutClass = cn(styles.layout);

  return (
    <div className={layoutClass}>
      {headerNode}
      <main className="main">
        <Container>{contentNode}</Container>
      </main>
      {footerNode}
    </div>
  );
};
