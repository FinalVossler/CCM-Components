import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"inputContainer" | "fullWidthContainer" | "label" | "input" | "maxCharacters">;
export default useStyles;
