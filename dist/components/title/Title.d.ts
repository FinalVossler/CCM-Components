import React from "react";
import { ITheme } from "ccmtypes";
export interface ITitleProps extends React.PropsWithChildren {
    theme?: ITheme;
    title: string;
}
declare const _default: React.MemoExoticComponent<(props: ITitleProps) => React.JSX.Element>;
export default _default;
