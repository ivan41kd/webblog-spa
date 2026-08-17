import { useAppSelector } from '@/app/hooks/hooks';
import type { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { LoginModal, UserMenu } from '@features';

import { Button, Text } from '@shared/ui';

import styles from '../header.module.scss';

export const HeaderAuth: FC = () => {
  const { isLoading } = useAppSelector((state) => state.header);
  const { isAuth } = useAppSelector((state) => state.auth);

  return isLoading ? (
    <Skeleton width={100} height={'100%'} />
  ) : !isAuth ? (
    <LoginModal>
      <Button className={styles['header-login-button']} size="md">
        <Text>Login</Text>
      </Button>
    </LoginModal>
  ) : (
    <>
      <UserMenu className={styles['header-user']} />
    </>
  );
};
