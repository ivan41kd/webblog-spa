import type { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { LayoutBase } from '@/app/layouts';

import { HomePage, LoginPage } from '@pages';

import { HOME, LOGIN } from '@shared/routes';

export const AppRoutes: FC = () => {
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
