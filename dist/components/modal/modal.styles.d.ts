import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"modalContainer" | "layer" | "modal" | "titleAndCloseContainer" | "contentContainer" | "closeIcon" | "modalTitle" | "buttonsContainer">;
export default useStyles;
