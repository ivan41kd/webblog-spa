import type { FC } from 'react';
import { useNavigate } from 'react-router';

import { Button, Text, Title } from '../..';
import styles from './not-found.module.scss';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={styles['not-found']}>
      <Title fontSize="2xl">404</Title>
      <Text>Oops! Page not found!</Text>
      <Button onClick={handleClick}>Back to home</Button>
    </div>
  );
};
