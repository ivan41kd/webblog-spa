import { Container, Section } from '@shared/ui';

import { LoginForm } from './ui';

export const LoginPage = () => {
  return (
    <Section className="login">
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
};
