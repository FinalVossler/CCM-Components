import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const SuccessIcon = (props: IIconProps) => {
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
      <g clip-path="url(#clip0_854_221762)">
        <path
          d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25ZM18.7394 9.10285L11.0268 16.6345C10.3241 17.3207 9.24124 17.3139 8.54626 16.6189L5.25111 13.3237C4.81215 12.8848 4.79161 12.1513 5.20521 11.6854C5.61882 11.2196 6.30995 11.1978 6.74891 11.6367L9.79737 14.6852L17.2606 7.39715C17.7044 6.96375 18.3952 6.99424 18.8036 7.46525C19.212 7.93627 19.1833 8.66945 18.7394 9.10285Z"
          fill={props.color || "#1A9C25"}
        />
      </g>
      <defs>
        <clipPath id="clip0_854_221762">
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(SuccessIcon);
