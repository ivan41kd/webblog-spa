'use client';

import dynamic from 'next/dynamic';
import { type FC, useState } from 'react';

import { Modal, Title } from '@shared/ui';

import styles from './login-modal.module.scss';
import type { LoginModalPropsType } from './type';
import { LoginForm } from './ui/login-form';

export const LoginModal: FC<LoginModalPropsType> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const Portal = dynamic(
    () => import('@shared/hoc/Portal').then((mod) => mod.Portal),
    { ssr: false }
  );

  return (
    <>
      <div onClick={toggleModal}>{children}</div>

      <Portal>
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
        </Modal>
      </Portal>
    </>
  );
};
