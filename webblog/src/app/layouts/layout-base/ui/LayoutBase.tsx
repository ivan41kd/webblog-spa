import { Outlet } from 'react-router';

import { Header, Footer } from '@widgets';
import { LayoutMain } from '@/shared/ui/layouts';

export const LayoutBase = () => {
  const listLinks = [{ title: 'Home', link: '/home' }];

  return (
    <LayoutMain
      headerNode={<Header navList={listLinks} />}
      contentNode={<Outlet />}
      footerNode={<Footer />}
    />
  );
};
