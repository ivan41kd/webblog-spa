import { Outlet } from 'react-router';

import { Header, Footer } from '@widgets';

import { LayoutMain } from '@/shared/ui/layout-main';

export const LayoutBase = () => {
  return <LayoutMain headerNode={<Header />} contentNode={<Outlet />} footerNode={<Footer />} />;
};
