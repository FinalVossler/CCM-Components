import React, { ReactNode } from "react";
import { ITheme, theme } from "ccmtypes";

import useStyles from "./modal.styles";
import { useTheme } from "react-jss";
import withThemeProvider from "../../hoc/withThemeProvider";
import Button from "../button";
import { ButtonTypeEnum } from "../button/Button";
import ClearIcon from "../icons/ClearIcon";

export interface IModalProps extends React.PropsWithChildren {
  title: string;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  withConfirm?: boolean;
  withCancem?: boolean;

  cancelText?: string;
  confirmText?: string;

  theme?: ITheme;
  children: ReactNode;
}

const Modal: React.FunctionComponent<IModalProps> = (props: IModalProps) => {
  const theme: ITheme = useTheme();
  const styles = useStyles({ theme: props.theme || theme });

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const handleConfirm = () => {
    if (props.onConfirm) {
      props.onConfirm();
    }
  };

  const handleCancel = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.layer} onClick={handleClose}></div>

      <div className={styles.modal}>
        <div className={styles.titleAndCloseContainer}>
          <h2 className={styles.modalTitle}>{props.title}</h2>
          <ClearIcon className={styles.closeIcon} onClick={handleClose} />
        </div>

        <div className={styles.contentContainer}>{props.children}</div>

        <div className={styles.buttonsContainer}>
          <Button
            label={props.cancelText}
            buttonType={ButtonTypeEnum.Cancel}
            onClick={handleCancel}
            style={{ marginRight: 20 }}
            withoutBorder
          ></Button>
          <Button
            label={props.confirmText}
            buttonType={ButtonTypeEnum.Confirm}
            onClick={handleConfirm}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(withThemeProvider(Modal, theme));
