import React, { ReactNode } from "react";
import { ITheme } from "ccmtypes";
export interface IInfoProps extends React.PropsWithChildren {
    theme?: ITheme;
    children?: ReactNode;
}
declare const _default: React.NamedExoticComponent<IInfoProps>;
export default _default;
