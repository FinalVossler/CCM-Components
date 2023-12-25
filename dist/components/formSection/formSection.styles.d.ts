import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"formSectionContainer" | "inputsContainer" | "title">;
export default useStyles;
