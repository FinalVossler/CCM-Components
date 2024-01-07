import React from "react";
import { ITheme } from "ccmtypes";
import IIconProps from "../icons/IIconProps";
export interface ISideBarOption {
    icon: React.FunctionComponent<IIconProps>;
    title: string;
    link?: string;
    onClick?: () => void;
}
export interface ISideBarSection {
    title: string;
    options: ISideBarOption[];
}
export interface ISideBarProps {
    theme?: ITheme;
    sideBarSections: ISideBarSection[];
}
declare const _default: React.NamedExoticComponent<ISideBarProps>;
export default _default;
