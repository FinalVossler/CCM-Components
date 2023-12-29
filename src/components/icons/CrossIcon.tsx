import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const CrossIcon = (props: IIconProps) => {
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
        d="M4.81808 5.318C5.01334 5.12273 5.32992 5.12273 5.52518 5.318L8.00006 7.79287L10.4749 5.318C10.6702 5.12273 10.9868 5.12273 11.182 5.318C11.3773 5.51326 11.3773 5.82984 11.182 6.0251L8.70716 8.49998L11.182 10.9748C11.3773 11.1701 11.3773 11.4867 11.182 11.682C10.9868 11.8772 10.6702 11.8772 10.4749 11.682L8.00006 9.20708L5.52518 11.682C5.32992 11.8772 5.01334 11.8772 4.81808 11.682C4.62281 11.4867 4.62281 11.1701 4.81808 10.9749L7.29295 8.49998L4.81808 6.0251C4.62282 5.82984 4.62282 5.51326 4.81808 5.318Z"
        fill={props.color || "#E3E6E8"}
      />
      <path
        d="M8 16C3.85786 16 0.5 12.6421 0.5 8.5C0.5 4.35786 3.85786 1 8 1C12.1421 1 15.5 4.35786 15.5 8.5C15.5 12.6421 12.1421 16 8 16ZM8 15C11.5899 15 14.5 12.0899 14.5 8.5C14.5 4.91015 11.5899 2 8 2C4.41015 2 1.5 4.91015 1.5 8.5C1.5 12.0899 4.41015 15 8 15Z"
        fill={props.color || "#E3E6E8"}
      />
    </svg>
  );
};

export default React.memo(CrossIcon);
