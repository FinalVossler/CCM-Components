import { ITheme } from "ccmtypes";
import { EmailBoxViewTypeEnum, IEmailBox } from "./EmailBoxes";
import React from "react";
interface IActiveEmailBoxProps extends React.PropsWithChildren {
    box: IEmailBox;
    theme?: ITheme;
    onChangeViewType: (viewType: EmailBoxViewTypeEnum) => void;
    onRemoveBox: () => void;
}
declare const _default: React.NamedExoticComponent<IActiveEmailBoxProps>;
export default _default;
