import React from "react";
import { ITheme } from "ccmtypes";
export interface ISectionProps extends React.PropsWithChildren {
    title: string;
    theme?: ITheme;
}
declare const _default: React.MemoExoticComponent<(props: ISectionProps) => React.JSX.Element>;
export default _default;
