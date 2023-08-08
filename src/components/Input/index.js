import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineGray400: "bg-white_A700 border border-gray_400 border-solid",
  OutlineWhiteA700: "border border-solid border-white_A700",
};
const shapes = {
  srcCircleBorder26: "rounded-radius26",
  CircleBorder22: "rounded-radius22",
  RoundedBorder2: "rounded-radius2",
};
const sizes = { smSrc: "pl-[15px] py-[15px]", sm: "pr-[11px] py-[11px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcCircleBorder26",
    "CircleBorder22",
    "RoundedBorder2",
  ]),
  variant: PropTypes.oneOf(["srcOutlineGray400", "OutlineWhiteA700"]),
  size: PropTypes.oneOf(["smSrc", "sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcCircleBorder26",
  variant: "srcOutlineGray400",
  size: "smSrc",
};

export { Input };
