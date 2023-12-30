import React from "react";
import { IButtonProps } from "../button/Button";
import { IModalProps } from "./Modal";
interface IModalButtonProps extends React.PropsWithChildren {
    buttonProps: IButtonProps;
    modalProps: IModalProps;
}
declare const ModalButton: React.FunctionComponent<IModalButtonProps>;
export default ModalButton;
