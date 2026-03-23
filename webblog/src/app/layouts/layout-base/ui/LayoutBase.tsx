import type { FC } from 'react';
import { Outlet } from 'react-router';

import { Header, Footer } from '@widgets';

import { LayoutMain } from '@/shared/ui/layouts';

export const LayoutBase: FC = () => {
  return <LayoutMain headerNode={<Header />} contentNode={<Outlet />} footerNode={<Footer />} />;
};
