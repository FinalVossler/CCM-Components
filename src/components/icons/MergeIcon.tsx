import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const MergeIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...additionalProps}
    >
      <path
        d="M8.55319 1.60241C8.37915 1.46969 8.13901 1.4656 7.96055 1.5923L0.710548 6.7396C0.576486 6.83478 0.497785 6.98978 0.500048 7.15418C0.502312 7.31858 0.585252 7.47135 0.721883 7.56281L7.97188 12.4155C8.14526 12.5316 8.37247 12.5278 8.54186 12.406L15.2919 7.55327C15.4205 7.46078 15.4977 7.31278 15.5 7.15434C15.5022 6.9959 15.4292 6.84579 15.3032 6.74971L8.55319 1.60241ZM8.23982 11.3915L1.88078 7.13517L8.23942 2.62072L14.1599 7.13546L8.23982 11.3915Z"
        fill={props.color || "#E3E6E8"}
      />
      <path
        d="M1.28307 9.58785C1.05545 9.43151 0.744184 9.4893 0.587848 9.71693C0.431512 9.94455 0.489303 10.2558 0.716929 10.4122L7.99693 15.4122C8.17319 15.5332 8.40692 15.5288 8.57847 15.4011L15.2985 10.4011C15.52 10.2363 15.566 9.92308 15.4011 9.70153C15.2363 9.47999 14.9231 9.43402 14.7015 9.59886L8.26837 14.3854L1.28307 9.58785Z"
        fill={props.color || "#E3E6E8"}
      />
    </svg>
  );
};

export default React.memo(MergeIcon);
