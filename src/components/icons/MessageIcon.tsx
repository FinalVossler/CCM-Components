import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const MessageIcon = (props: IIconProps) => {
  const additionalProps = useComputeIconAdditionalProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...additionalProps}
    >
      <path
        d="M2.25 4.61255C1.42157 4.61255 0.75 5.28412 0.75 6.11255V17.9625C0.75 18.791 1.42157 19.4625 2.25 19.4625H21.7285C22.5569 19.4625 23.2285 18.791 23.2285 17.9625V6.11255C23.2285 5.28412 22.5569 4.61255 21.7285 4.61255H2.25ZM11.7683 13.8823L3.46785 6.11255H20.4949C18.7963 7.62367 17.5247 8.75681 16.2534 9.88972C14.9222 11.076 13.5912 12.2621 11.7705 13.8817L11.7696 13.8822L11.7683 13.8823ZM17.257 11.0045C18.5826 9.82327 19.9084 8.6418 21.7285 7.02275V16.9179L16.4946 11.684C16.7484 11.4578 16.9989 11.2346 17.2493 11.0114L17.257 11.0045ZM15.3727 12.6834L20.6518 17.9625H3.34817L8.46547 12.8453L10.744 14.9781C11.3119 15.5097 12.19 15.5161 12.7675 15.0024C13.7552 14.1238 14.5974 13.374 15.3727 12.6834ZM2.25 7.02719L7.36978 11.8196L2.25 16.9394V7.02719Z"
        fill={props.color || "#E3E6E8"}
      />
    </svg>
  );
};

export default React.memo(MessageIcon);
