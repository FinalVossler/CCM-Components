import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const SearchIcon = (props: IIconProps) => {
  console.log("props", props);
  const additionalProps = useComputeIconAdditionalProps(props);

  console.log("search icon", additionalProps);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...additionalProps}
    >
      <g clipPath="url(#clip0_1008_68929)">
        <path
          d="M10.32 0.75C5.03463 0.75 0.75 5.03463 0.75 10.32C0.75 15.6054 5.03463 19.89 10.32 19.89C12.6927 19.89 14.8638 19.0265 16.536 17.5966L21.9697 23.0303C22.2626 23.3232 22.7374 23.3232 23.0303 23.0303C23.3232 22.7374 23.3232 22.2625 23.0303 21.9696L17.5967 16.536C19.0265 14.8637 19.89 12.6927 19.89 10.32C19.89 5.03463 15.6054 0.75 10.32 0.75ZM2.25 10.32C2.25 5.86306 5.86306 2.25 10.32 2.25C14.7769 2.25 18.39 5.86306 18.39 10.32C18.39 14.7769 14.7769 18.39 10.32 18.39C5.86306 18.39 2.25 14.7769 2.25 10.32Z"
          fill={props.color || "#E3E6E8"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1008_68929">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(SearchIcon);
