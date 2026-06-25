import { type FC, useState } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '@shared/ui';

import { LoginForm } from '../login-form';
import type { LoginModalPropsType } from './type';

export const LoginModal: FC<LoginModalPropsType> = ({ handler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={handleClick}>{handler}</div>
      {isOpen &&
        createPortal(
          <Modal onClose={handleClick}>
            <LoginForm isModal />
          </Modal>,
          document.body
        )}
    </>
  );
};
