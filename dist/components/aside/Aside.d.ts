import React, { ReactNode } from "react";
import { ITheme } from "ccmtypes";
export interface IAsideProps extends React.PropsWithChildren {
    theme?: ITheme;
    children?: ReactNode;
}
declare const _default: React.NamedExoticComponent<IAsideProps>;
export default _default;
