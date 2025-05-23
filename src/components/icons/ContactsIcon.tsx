import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const ContactsIcon = (props: IIconProps) => {
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
        d="M19 14C20.66 14 21.99 12.66 21.99 11C21.99 9.34 20.66 8 19 8C17.34 8 16 9.34 16 11C16 12.66 17.34 14 19 14ZM11 14C12.66 14 13.99 12.66 13.99 11C13.99 9.34 12.66 8 11 8C9.34 8 8 9.34 8 11C8 12.66 9.34 14 11 14ZM11 16C8.67 16 4 17.17 4 19.5V21C4 21.55 4.45 22 5 22H17C17.55 22 18 21.55 18 21V19.5C18 17.17 13.33 16 11 16ZM19 16C18.71 16 18.38 16.02 18.03 16.05C18.05 16.06 18.06 16.08 18.07 16.09C19.21 16.92 20 18.03 20 19.5V21C20 21.35 19.93 21.69 19.82 22H25C25.55 22 26 21.55 26 21V19.5C26 17.17 21.33 16 19 16Z"
        fill={props.color || "#C3CAD9"}
      />
    </svg>
  );
};

export default React.memo(ContactsIcon);
