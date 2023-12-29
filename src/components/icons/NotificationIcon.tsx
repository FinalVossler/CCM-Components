import React from "react";
import IIconProps from "./IIconProps";
import useComputeIconAdditionalProps from "./useComputeIconAdditionalProps";

const NotificationIcon = (props: IIconProps) => {
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
        d="M4.50327 14.0172H19.4711V10.9769C19.4711 7.17306 17.1372 3.97035 13.9623 3.01494C13.9623 3.01494 13.9623 0.75 11.9871 0.75C10.0118 0.75 10.0121 3.01494 10.0121 3.01494C6.83724 3.97035 4.50333 7.17306 4.50333 10.9769L4.50327 14.0172Z"
        fill={props.color || "white"}
      />
      <path
        d="M4.49823 15.5613H19.5618L21.8231 18.2784C22.2302 18.7674 21.8816 19.5093 21.2453 19.5081L2.75871 19.4737C2.11744 19.4725 1.77334 18.7192 2.19228 18.2337L4.49823 15.5613Z"
        fill={props.color || "white"}
      />
      <path
        d="M12.1611 23.25C10.2701 23.25 8.68954 22.2534 8.3021 20.9224H16.02C15.6326 22.2534 14.052 23.25 12.1611 23.25Z"
        fill={props.color || "white"}
      />
    </svg>
  );
};

export default React.memo(NotificationIcon);
