import { type FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';

import { Modal, Title } from '@shared/ui';

import styles from './login-modal.module.scss';
import type { LoginModalPropsType } from './type';
import { LoginForm } from './ui/login-form';

export const LoginModal: FC<LoginModalPropsType> = ({ title, children }) => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(location.state?.openLoginModal ?? false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (location.state?.openLoginModal) {
      window.history.replaceState({ ...window.history.state, usr: null }, '');
    }
  }, [location]);

  return (
    <>
      <div onClick={toggleModal}>{children}</div>
      {createPortal(
        <Modal
          className={styles['login-modal']}
          isOpen={isOpen}
          onClose={toggleModal}>
          <div className={styles['login-modal-wrapper']}>
            {title && (
              <Title fontSize="xs" tag="h2">
                {title}
              </Title>
            )}
            <LoginForm />
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};
