import React from "react";
import { ITheme } from "ccmtypes";
export interface ITitleProps extends React.PropsWithChildren {
    theme?: ITheme;
    title: string;
}
declare const _default: React.NamedExoticComponent<ITitleProps>;
export default _default;
