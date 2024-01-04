import React, { ReactNode } from "react";
import { ITheme } from "ccmtypes";
export interface ISectionProps extends React.PropsWithChildren {
    title: string;
    theme?: ITheme;
    children: ReactNode;
}
declare const _default: React.NamedExoticComponent<ISectionProps>;
export default _default;
