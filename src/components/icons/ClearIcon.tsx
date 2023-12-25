import React from "react";
import IIconProps from "./IIconProps";

const ClearIcon = (props: IIconProps) => {
  const additionalProps = {
    ...(props.className ? { className: props.className } : {}),
    ...(props.onClick ? { onClick: props.onClick } : {}),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...additionalProps}
    >
      <path
        fill="#17BA89"
        d="M3.604 2.896a.5.5 0 1 0-.708.708L7.293 8l-4.397 4.396a.5.5 0 0 0 .708.708L8 8.707l4.396 4.397a.5.5 0 0 0 .708-.708L8.707 8l4.397-4.396a.5.5 0 0 0-.708-.708L8 7.293 3.604 2.896Z"
      />
    </svg>
  );
};

export default React.memo(ClearIcon);
