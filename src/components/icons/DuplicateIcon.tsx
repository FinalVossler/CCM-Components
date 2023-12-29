import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const DuplicateIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      {...additionalProps}
    >
      <path
        d="M0.999982 -0.00506592C0.726571 -0.00506592 0.504929 0.221029 0.504929 0.49993V12.4999C0.504929 12.7788 0.726571 13.0049 0.999982 13.0049H1.99998C2.27339 13.0049 2.49503 12.7788 2.49503 12.4999C2.49503 12.221 2.27339 11.9949 1.99998 11.9949H1.49503V1.00493H10.5049V1.49993C10.5049 1.77883 10.7266 2.00493 11 2.00493C11.2734 2.00493 11.495 1.77883 11.495 1.49993V0.49993C11.495 0.221029 11.2734 -0.00506592 11 -0.00506592H0.999982Z"
        fill={props.color || "#E3E6E8"}
      />
      <path
        d="M3.49998 3.50493C3.49998 3.22603 3.72162 2.99993 3.99503 2.99993H13.0049C13.2783 2.99993 13.5 3.22603 13.5 3.50493V14.4949C13.5 14.7738 13.2783 14.9999 13.0049 14.9999H3.99503C3.72162 14.9999 3.49998 14.7738 3.49998 14.4949V3.50493ZM4.49009 13.9899H12.5099V4.00992H4.49009V13.9899Z"
        fill={props.color || "#E3E6E8"}
      />
    </svg>
  );
};

export default React.memo(DuplicateIcon);
