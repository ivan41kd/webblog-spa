import type { FC } from 'react';

import { LoginForm } from '@features';

import { Container, Section } from '@shared/ui';

export const LoginPage: FC = () => {
  return (
    <Section className="login">
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
};
