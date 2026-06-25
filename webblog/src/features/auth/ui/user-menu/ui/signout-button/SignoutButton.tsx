import type { FC } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '@app/store/rootReducer';

import { signout } from '@features/auth/model';

import { Button } from '@shared/ui';

interface SignoutButtonPropsType {
  className?: string;
}

export const SignoutButton: FC<SignoutButtonPropsType> = ({ className }) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <Button
      className={className}
      variant="secondary"
      size="md"
      onClick={() => {
        dispatch(signout());
        navigate(0);
      }}>
      Sign out
    </Button>
  );
};
