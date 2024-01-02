import React from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/themes/dark.css";
import { ITheme } from "ccmtypes";
export interface IFroalaProps {
    initialValue?: string;
    onChange?: (newValue: string) => void;
    error?: string;
    readOnly?: boolean;
    language?: string;
    toggleEditorFullScreen?: () => void;
    brushTitle?: string;
    theme?: ITheme;
    froalaKey?: string;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IFroalaProps & React.RefAttributes<FroalaEditorComponent>>>;
export default _default;
