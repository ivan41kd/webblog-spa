import type { FC } from 'react';

import { useLocation, useNavigate } from 'react-router';

import { Button, Text } from '@shared/ui';

import styles from './login-prompt.module.scss';

interface LoginPromptPropsType {
  text: string;
  anchor?: string;
}

export const LoginPrompt: FC<LoginPromptPropsType> = ({ text, anchor }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles['login-prompt']}>
      <Text>{text}</Text>
      <Button
        variant="primary"
        size="md"
        onClick={() => {
          navigate(`/login?continue=${pathname}${anchor ? `#${anchor}` : ''}`);
        }}>
        Login
      </Button>
    </div>
  );
};
