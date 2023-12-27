import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const SideBarIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...additionalProps}
    >
      <path
        d="M14.7601 11.6568C14.5355 11.9188 14.1409 11.9492 13.8788 11.7245C13.6168 11.4999 13.5864 11.1053 13.811 10.8433L16.141 8.12501H2.5C2.15482 8.12501 1.875 7.84519 1.875 7.50001C1.875 7.15483 2.15482 6.87501 2.5 6.87501H16.141L13.811 4.15676C13.5864 3.89468 13.6168 3.50012 13.8788 3.27548C14.1409 3.05084 14.5355 3.08119 14.7601 3.34327L17.9672 7.08484C18.0654 7.19524 18.125 7.34066 18.125 7.50001C18.125 7.65937 18.0654 7.8048 17.9672 7.9152L14.7601 11.6568Z"
        fill={props.color || "#17BA89"}
      />
      <path
        d="M11.875 11.875C11.875 11.5298 11.5952 11.25 11.25 11.25H2.5C2.15482 11.25 1.875 11.5298 1.875 11.875C1.875 12.2202 2.15482 12.5 2.5 12.5H11.25C11.5952 12.5 11.875 12.2202 11.875 11.875Z"
        fill={props.color || "#17BA89"}
      />
      <path
        d="M11.25 15.625C11.5952 15.625 11.875 15.9048 11.875 16.25C11.875 16.5952 11.5952 16.875 11.25 16.875H2.5C2.15482 16.875 1.875 16.5952 1.875 16.25C1.875 15.9048 2.15482 15.625 2.5 15.625H11.25Z"
        fill={props.color || "#17BA89"}
      />
    </svg>
  );
};

export default React.memo(SideBarIcon);
