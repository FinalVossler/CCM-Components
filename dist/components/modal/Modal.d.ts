import React from "react";
import { ITheme } from "ccmtypes";
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
}
declare const _default: React.NamedExoticComponent<IModalProps>;
export default _default;
