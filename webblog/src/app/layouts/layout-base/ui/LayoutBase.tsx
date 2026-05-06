import { type FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';

import { Footer, Header } from '@widgets';

import { LayoutMain } from '@shared/ui';

export const LayoutBase: FC = () => {
  return (
    <>
      <LayoutMain
        headerNode={<Header />}
        contentNode={<Outlet />}
        footerNode={<Footer />}
      />
      <ScrollRestoration />
    </>
  );
};
