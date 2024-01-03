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
    onChange?: (value: boolean) => void;
}
declare const _default: React.NamedExoticComponent<IYesOrNoProps>;
export default _default;
