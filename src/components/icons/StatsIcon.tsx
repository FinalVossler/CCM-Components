import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const StatsIcon = (props: IIconProps) => {
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
        d="M19.4325 9.85L20.8725 11.29L15.9925 16.17L12.7025 12.88C12.5157 12.6927 12.262 12.5875 11.9975 12.5875C11.733 12.5875 11.4793 12.6927 11.2925 12.88L5.2925 18.89C4.9025 19.28 4.9025 19.91 5.2925 20.3C5.6825 20.69 6.3125 20.69 6.7025 20.3L11.9925 15L15.2825 18.29C15.6725 18.68 16.3025 18.68 16.6925 18.29L22.2825 12.71L23.7225 14.15C24.0325 14.46 24.5725 14.24 24.5725 13.8V9.5C24.5825 9.22 24.3625 9 24.0825 9H19.7925C19.3425 9 19.1225 9.54 19.4325 9.85Z"
        fill={props.color || "#C3CAD9"}
      />
    </svg>
  );
};

export default React.memo(StatsIcon);
