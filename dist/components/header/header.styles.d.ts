import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"left" | "right" | "headerContainer">;
export default useStyles;
