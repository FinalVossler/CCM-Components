import React from "react";
import Button from "../button";
import { IButtonProps } from "../button/Button";
import Modal, { IModalProps } from "./Modal";

interface IModalButtonProps extends React.PropsWithChildren {
  buttonProps: IButtonProps;
  modalProps: IModalProps;
}

const ModalButton: React.FunctionComponent<IModalButtonProps> = (
  props: IModalButtonProps
) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleOnClose = () => {
    if (props.modalProps.onClose) {
      props.modalProps.onClose();
    }
    setIsModalOpen(false);
  };

  const handleOnCancel = () => {
    if (props.modalProps.onCancel) {
      props.modalProps.onCancel();
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button {...props.buttonProps} onClick={handleButtonClick} />
      {isModalOpen && (
        <Modal
          {...props.modalProps}
          onClose={handleOnClose}
          onCancel={handleOnCancel}
        >
          {props.children}
        </Modal>
      )}
    </div>
  );
};

export default ModalButton;
