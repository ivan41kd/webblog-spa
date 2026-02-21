import { Routes, Route, Navigate } from 'react-router';

import { HomePage, HomePage2 } from '@pages';

import { HOME, HOME2 } from '@shared/routes';

import { LayoutBase } from '@/app/layouts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path={HOME} element={<HomePage />} />
      <Route element={<LayoutBase />}>
        <Route path={HOME2} element={<HomePage2 />} />
      </Route>
    </Routes>
  );
};
