import React from "react";
import { ITheme } from "ccmtypes";
export interface ISelectedAddresses {
    theme?: ITheme;
    title: string;
    numberOfSelectedAddressesTitle: string;
    onClick?: () => void;
}
declare const _default: React.MemoExoticComponent<(props: ISelectedAddresses) => React.JSX.Element>;
export default _default;
