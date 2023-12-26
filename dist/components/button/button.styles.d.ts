import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"confirmButton" | "cancelButton">;
export default useStyles;
