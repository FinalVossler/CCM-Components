import React from "react";
import { ITheme } from "ccmtypes";
import IIconProps from "../icons/IIconProps";
interface IMoreButtonsButtons {
    icon: React.FunctionComponent<IIconProps>;
    text: string;
    onClick?: () => void;
}
export interface IMoreButtonProps {
    theme?: ITheme;
    buttons: IMoreButtonsButtons[];
    style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<(props: IMoreButtonProps) => React.JSX.Element>;
export default _default;
