import React from "react";
import IIconProps from "./IIconProps";
declare const useComputeIconAdditionalProps: (props: IIconProps) => {
    style?: React.CSSProperties;
    onClick?: () => void;
    className?: string;
};
export default useComputeIconAdditionalProps;
