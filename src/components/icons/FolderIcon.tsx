import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const FolderIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...additionalProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 19H14C13.45 19 13 18.55 13 18H6.01V22C6.01 23.1 6.91 24 8.01 24H22C23.1 24 24 23.1 24 22V18H17C17 18.55 16.55 19 16 19ZM23 10H19C19 7.79 17.21 6 15 6C12.79 6 11 7.79 11 10H7C5.9 10 5 10.9 5 12V15C5 16.11 5.89 17 7 17H13V16C13 15.45 13.45 15 14 15H16C16.55 15 17 15.45 17 16V17H23C24.1 17 25 16.1 25 15V12C25 10.9 24.1 10 23 10ZM13 10C13 8.9 13.9 8 15 8C16.1 8 17 8.9 17 10H12.99H13Z"
        fill={props.color || "white"}
      />
    </svg>
  );
};

export default React.memo(FolderIcon);
