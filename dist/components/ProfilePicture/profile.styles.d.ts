import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"content" | "profilePictureContainer" | "picture" | "firstAndLastName" | "action">;
export default useStyles;
