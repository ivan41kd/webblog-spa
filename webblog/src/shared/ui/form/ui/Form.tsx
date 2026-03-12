import cn from 'classnames';
import { Fragment } from 'react';

import { Button } from '@shared/ui';

import styles from './form.module.scss';

type FormInput = {
  input: React.ReactNode;
  type: string;
};

interface FormProps {
  className?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: FormInput[];
  buttonText?: string;
}

export const Form = ({ className, onSubmit, inputs, buttonText = 'Submit' }: FormProps) => {
  const formClass = cn(className, styles.form);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      noValidate
      className={formClass}
    >
      {inputs.map((input, index) => (
        <Fragment key={input.type + index}>{input.input}</Fragment>
      ))}
      <Button isSubmit>{buttonText}</Button>
    </form>
  );
};
