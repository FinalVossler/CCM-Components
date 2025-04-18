import React from "react";
import { ITheme } from "ccmtypes";
import { PlacesType } from "react-tooltip";
import IIconProps from "../icons/IIconProps";
export declare enum MoreButtonsDotsTypeEnum {
    Vertical = "Vertical",
    Horizontal = "Horizontal"
}
interface IMoreButtonsButton {
    icon: React.FunctionComponent<IIconProps>;
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface IMoreButtonProps {
    theme?: ITheme;
    buttons: IMoreButtonsButton[];
    style?: React.CSSProperties;
    type?: MoreButtonsDotsTypeEnum;
    tooltipMessage?: string;
    toolTipPosition?: PlacesType;
}
declare const _default: React.NamedExoticComponent<IMoreButtonProps>;
export default _default;
