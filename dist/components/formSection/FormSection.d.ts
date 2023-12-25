import React from "react";
import { ITheme } from "ccmtypes";
interface IFormSectionProps extends React.PropsWithChildren {
    title?: string;
    theme?: ITheme;
}
declare const _default: React.MemoExoticComponent<(props: IFormSectionProps) => React.JSX.Element>;
export default _default;
