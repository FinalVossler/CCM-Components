import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"inputContainer" | "fullWidthContainer" | "label" | "input" | "maxCharacters" | "suffixIcon" | "suffixIconWithoutLabel">;
export default useStyles;
