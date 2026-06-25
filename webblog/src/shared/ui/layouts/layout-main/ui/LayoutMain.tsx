import cn from 'classnames';
import type { FC } from 'react';

import { Container } from '@shared/ui';

import type { LayoutMainPropsType } from '../type';
import styles from './layout.module.scss';

export const LayoutMain: FC<LayoutMainPropsType> = ({
  headerNode,
  contentNode,
  footerNode,
}) => {
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
