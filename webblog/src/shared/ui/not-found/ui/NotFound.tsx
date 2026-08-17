import Link from 'next/link';
import type { FC } from 'react';

import { Button, Text, Title } from '../..';
import styles from './not-found.module.scss';

export const NotFound: FC = () => {
  return (
    <div className={styles['not-found']}>
      <Title fontSize="2xl">404</Title>
      <Text>Oops! Page not found!</Text>
      <Link href="/" replace>
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};
