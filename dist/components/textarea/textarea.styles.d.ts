import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"textareaContainer" | "errorerTextareaContainer" | "label" | "textarea" | "error" | "errorWhenNoLabel">;
export default useStyles;
