import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"textareaContainer" | "label" | "textarea">;
export default useStyles;
