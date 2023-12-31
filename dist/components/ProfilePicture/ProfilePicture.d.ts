import React from "react";
import { ITheme } from "ccmtypes";
export declare enum ButtonTypeEnum {
    Confirm = "Confirm",
    Cancel = "Cancel",
    Default = "Default"
}
export interface IProfilePictureAction {
    actionTitle: string;
    onClick: () => void;
}
export interface IProfilePictureProps {
    theme?: ITheme;
    firstName: string;
    lastName: string;
    withFullFirstNameAndLast?: boolean;
    action?: IProfilePictureAction;
}
declare const _default: React.MemoExoticComponent<(props: IProfilePictureProps) => React.JSX.Element>;
export default _default;
