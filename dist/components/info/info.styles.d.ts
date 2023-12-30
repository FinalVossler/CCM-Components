import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"infoContainer" | "infoTitle" | "infoValue">;
export default useStyles;
