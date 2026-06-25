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
      <Button
        variant="secondary"
        className={styles['login-back-button']}
        onClick={() => {
          if (isSameDomain) {
            navigate(-1);
          } else {
            navigate('/');
          }
        }}>
        ← Back
      </Button>

      <Container>
        <div className={styles['login-wrapper']}>
          <LoginForm />
        </div>
      </Container>
    </Section>
  );
};
