import React from "react";

import { IIconProps } from "../icons";
import useComputeIconAdditionalProps from "../icons/useComputeIconAdditionalProps";

export const CrossIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      {...additionalProps}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <g clipPath="url(#clip0_1198_13131)">
        <path
          d="M1.66667 0L0 1.66667L3.33333 5L0 8.33333L1.66667 10L5 6.66667L8.33333 10L10 8.33333L6.66667 5L10 1.66667L8.33333 0L5 3.33333L1.66667 0Z"
          fill="white"
          fill-opacity="0.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1198_13131">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="matrix(-1 0 0 -1 10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EnlargeIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      {...additionalProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13 7.44444V3H8.55556L10.3833 4.82778L4.82778 10.3833L3 8.55556V13H7.44444L5.61667 11.1722L11.1722 5.61667L13 7.44444Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
};

export const ReduceIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      {...additionalProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.25 4.7915L3.25 4.7915V2.7915L13.25 2.7915V4.7915Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
};
