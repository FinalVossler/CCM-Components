import { ITheme } from "ccmtypes";
declare const useStyles: (data?: {
    theme?: ITheme;
}) => import("jss").Classes<"selectedAddressesContainer" | "title" | "numberOfSelectedAddresses">;
export default useStyles;
