import React from "react";
import { ITheme } from "ccmtypes";
interface IYesOrNoProps {
    label: string;
    theme?: ITheme;
    yesLabel?: string;
    noLabel?: string;
    value?: boolean;
    minWidth?: string;
    maxWidth?: string;
    error?: string;
}
declare const _default: React.NamedExoticComponent<IYesOrNoProps>;
export default _default;
