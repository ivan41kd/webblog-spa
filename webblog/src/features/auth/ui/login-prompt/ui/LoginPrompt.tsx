import type { FC } from 'react';

import { Text } from '@shared/ui';

import { LoginButton } from '../../login-button';
import styles from './login-prompt.module.scss';

interface LoginPromptPropsType {
  text: string;
}

export const LoginPrompt: FC<LoginPromptPropsType> = ({ text }) => {
  return (
    <div className={styles['login-prompt']}>
      <Text>{text}</Text>
      <LoginButton />
    </div>
  );
};
