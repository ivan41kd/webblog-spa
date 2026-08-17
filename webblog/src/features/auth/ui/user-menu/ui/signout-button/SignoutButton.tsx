import type { FC } from 'react';

import { useAppDispatch } from '@app/hooks';

import { signout } from '@features/auth/model';

import { Button } from '@shared/ui';

interface SignoutButtonPropsType {
  className?: string;
}

export const SignoutButton: FC<SignoutButtonPropsType> = ({ className }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      className={className}
      variant="secondary"
      size="md"
      onClick={() => {
        dispatch(signout());
      }}>
      Sign out
    </Button>
  );
};
