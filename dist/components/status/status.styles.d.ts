import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"status" | "statusWarning" | "statusDanger" | "statusSuccess" | "statusInfo">;
export default useStyles;
