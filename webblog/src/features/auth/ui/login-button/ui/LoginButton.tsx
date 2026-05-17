import type { FC } from 'react';

import { useLocation, useNavigate } from 'react-router';

import { Button } from '@shared/ui';

interface LoginButtonPropsType {
  className?: string;
}

export const LoginButton: FC<LoginButtonPropsType> = ({ className }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Button
      className={className}
      variant="primary"
      size="md"
      onClick={() => {
        navigate(`/login?continue=${pathname}`);
      }}>
      Login
    </Button>
  );
};
