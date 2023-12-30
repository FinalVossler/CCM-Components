import React from "react";
import { ITheme } from "ccmtypes";
export interface IInfoProps extends React.PropsWithChildren {
    theme?: ITheme;
}
declare const _default: React.MemoExoticComponent<(props: IInfoProps) => React.JSX.Element>;
export default _default;
