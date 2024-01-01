import { ITheme } from "ccmtypes";
import { EmailBoxViewTypeEnum, IEmailBox } from "./EmailBoxes";
import React from "react";
interface IReducedEmailBoxProps {
    box: IEmailBox;
    theme?: ITheme;
    onChangeViewType: (viewType: EmailBoxViewTypeEnum) => void;
    onRemoveBox: () => void;
}
declare const _default: React.NamedExoticComponent<IReducedEmailBoxProps>;
export default _default;
