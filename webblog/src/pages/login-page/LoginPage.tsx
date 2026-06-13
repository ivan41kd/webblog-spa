import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { LoginForm } from '@features/auth';

import { Button, Container, Section } from '@shared/ui';

import styles from './login.module.scss';

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSameDomain = location.key !== 'default';

  return (
    <Section className={styles.login}>
      {isSameDomain && (
        <Button
          variant="secondary"
          className={styles['login-back-button']}
          onClick={() => navigate(-1)}>
          ← Back
        </Button>
      )}
      <Container>
        <div className={styles['login-wrapper']}>
          <LoginForm />
        </div>
      </Container>
    </Section>
  );
};
