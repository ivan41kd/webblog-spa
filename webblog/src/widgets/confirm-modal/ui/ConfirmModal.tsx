import { type FC, type PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button, Modal } from '@shared/ui';

import styles from './confirm-modal.module.scss';

interface ConfirmModalPropsType extends PropsWithChildren {
  text?: string;
  confirmText?: string;
  onConfirm: () => void;
}

export const ConfirmModal: FC<ConfirmModalPropsType> = ({
  children,
  text,
  confirmText = 'Confirm',
  onConfirm,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div onClick={toggleModal}>{children}</div>
      {createPortal(
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <div className={styles['confirm-modal']}>
            {text}
            <div className={styles['confirm-modal-actions']}>
              <Button onClick={toggleModal}>Cancel</Button>
              <Button
                onClick={() => {
                  onConfirm();
                  toggleModal();
                }}>
                {confirmText}
              </Button>
            </div>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};
