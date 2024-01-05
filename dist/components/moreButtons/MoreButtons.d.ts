import React from "react";
import { ITheme } from "ccmtypes";
import IIconProps from "../icons/IIconProps";
export declare enum MoreButtonsDotsTypeEnum {
    Vertical = "Vertical",
    Horizontal = "Horizontal"
}
interface IMoreButtonsButtons {
    icon: React.FunctionComponent<IIconProps>;
    text: string;
    onClick?: () => void;
}
export interface IMoreButtonProps {
    theme?: ITheme;
    buttons: IMoreButtonsButtons[];
    style?: React.CSSProperties;
    type?: MoreButtonsDotsTypeEnum;
}
declare const _default: React.NamedExoticComponent<IMoreButtonProps>;
export default _default;
