import type { FC } from 'react';
import { useNavigate } from 'react-router';

import { useLocalStorage } from '@shared/lib';
import { Button } from '@shared/ui';

interface SignoutButtonPropsType {
  className?: string;
}

export const SignoutButton: FC<SignoutButtonPropsType> = ({ className }) => {
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage();
  return (
    <Button
      className={className}
      variant="secondary"
      size="md"
      onClick={() => {
        removeItem('user');
        navigate(0);
      }}>
      Sign out
    </Button>
  );
};
