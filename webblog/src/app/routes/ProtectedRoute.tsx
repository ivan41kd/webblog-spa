import { Navigate, Outlet } from 'react-router';

import { useAppSelector } from '../store/rootReducer';

export const ProtectedRoute = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/home" state={{ openLoginModal: true }} replace />;
  }

  return <Outlet />;
};
