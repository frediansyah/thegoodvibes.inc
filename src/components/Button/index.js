import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder24: "rounded-radius24",
  CircleBorder36: "rounded-radius36",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder17: "rounded-radius17",
  icbCircleBorder27: "rounded-radius27",
};
const variants = {
  OutlineGray903: "border-2 border-gray_903 border-solid",
  OutlineWhiteA700:
    "bg-white_A700 border border-solid border-white_A700 text-gray_901",
  OutlineWhiteA700_1: "border-2 border-solid border-white_A700 text-white_A700",
  OutlineGray900: "border-2 border-gray_900 border-solid text-gray_900",
  OutlineGray900_1: "border border-gray_900 border-solid text-gray_900",
  icbFillGray900: "bg-gray_900",
};
const sizes = {
  sm: "p-[6px]",
  md: "p-[9px]",
  lg: "p-[13px]",
  xl: "sm:pr-[20px] pr-[23px] py-[23px]",
  smIcn: "p-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder24",
    "CircleBorder36",
    "RoundedBorder10",
    "RoundedBorder17",
    "icbCircleBorder27",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray903",
    "OutlineWhiteA700",
    "OutlineWhiteA700_1",
    "OutlineGray900",
    "OutlineGray900_1",
    "icbFillGray900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder24",
  variant: "OutlineGray903",
  size: "md",
};

export { Button };
