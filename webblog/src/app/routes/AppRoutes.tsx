import { Routes, Route, Navigate } from 'react-router';

import { HomePage, LoginPage } from '@pages';

import { HOME, LOGIN } from '@shared/routes';

import { LayoutBase } from '@/app/layouts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route element={<LayoutBase />}>
        <Route path={HOME} element={<HomePage />} />
      </Route>
      <Route path={LOGIN} element={<LoginPage />} />
    </Routes>
  );
};
