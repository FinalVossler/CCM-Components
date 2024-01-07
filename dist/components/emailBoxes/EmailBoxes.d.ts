import React from "react";
import { ITheme } from "ccmtypes";
import { IButtonProps } from "../button/Button";
export declare enum EmailBoxViewTypeEnum {
    Reduced = "Reduced",
    Active = "Active",
    FullScreen = "FullScreen"
}
export interface IEmailBox {
    viewType: EmailBoxViewTypeEnum;
    title: string;
    id?: string;
}
export interface IEmailBoxesProps {
    theme?: ITheme;
    boxes: IEmailBox[];
    sendEmailButtonProps: IButtonProps;
    newEmailBoxTitle: string;
    EmailFormComponent: React.FunctionComponent<{
        emailBox: IEmailBox;
    }>;
    onRemoveBox?: (box: IEmailBox) => void;
}
declare const _default: React.NamedExoticComponent<IEmailBoxesProps>;
export default _default;
