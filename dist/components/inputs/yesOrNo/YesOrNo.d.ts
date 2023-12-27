import React from "react";
import { ITheme } from "ccmtypes";
interface IYesOrNoProps {
    label: string;
    theme?: ITheme;
    yesLabel?: string;
    noLabel?: string;
    value?: boolean;
}
declare const _default: React.MemoExoticComponent<(props: IYesOrNoProps) => React.JSX.Element>;
export default _default;
