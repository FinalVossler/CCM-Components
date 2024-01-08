import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"inputContainer" | "disabledInputContainer" | "erroredInputContainer" | "fullWidthContainer" | "label" | "input" | "maxCharacters" | "suffixIcon" | "iconsContainer" | "iconsContainerWithoutLabel" | "error" | "errorWhenNoLabel">;
export default useStyles;
