import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const VerticalDotsIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...additionalProps}
    >
      <path
        d="M9.5 2C9.5 2.82843 8.82843 3.5 8 3.5C7.17157 3.5 6.5 2.82843 6.5 2C6.5 1.17157 7.17157 0.5 8 0.5C8.82843 0.5 9.5 1.17157 9.5 2Z"
        fill={props.color || "#E3E6E8"}
      />
      <path
        d="M9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z"
        fill={props.color || "#E3E6E8"}
      />
      <path
        d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
        fill={props.color || "#E3E6E8"}
      />
    </svg>
  );
};

export default React.memo(VerticalDotsIcon);
