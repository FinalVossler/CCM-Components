import React from "react";
import { ITheme } from "ccmtypes";
import { IButtonProps } from "../button/Button";
export interface IFilesInputProps {
    theme?: ITheme;
    buttonProps: IButtonProps;
    isMulti?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}
declare const _default: React.NamedExoticComponent<IFilesInputProps>;
export default _default;
