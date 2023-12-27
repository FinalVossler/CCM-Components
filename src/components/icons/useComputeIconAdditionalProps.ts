import React from "react";

import IIconProps from "./IIconProps";

const useComputeIconAdditionalProps = (props: IIconProps) => {
  const additionalProps = React.useMemo(
    () => ({
      ...(props.className ? { className: props.className } : {}),
      ...(props.onClick ? { onClick: props.onClick } : {}),
      ...(props.style ? { style: props.style } : {}),
    }),
    [props]
  );

  return additionalProps;
};

export default useComputeIconAdditionalProps;
