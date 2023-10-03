import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    gray_700: "bg-gray-700 text-white-A700",
    white_A700_63: "bg-white-A700_63",
    deep_purple_A200_01: "bg-deep_purple-A200_01",
    indigo_500_01: "bg-indigo-500_01",
    green_400: "bg-green-400",
    pink_600: "bg-pink-600",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    blue_A200: "bg-blue-A200 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
    white_A700_19: "bg-white-A700_19 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
  outline: {
    deep_purple_A200:
      "border border-deep_purple-A200 border-solid text-deep_purple-A200",
  },
  gradient: { indigo_500_deep_purple_A400: "bg-gradient " },
};
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-[13px]",
  lg: "p-[18px]",
  xl: "p-[23px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "gray_700",
    "white_A700_63",
    "deep_purple_A200_01",
    "indigo_500_01",
    "green_400",
    "pink_600",
    "deep_purple_A200",
    "blue_A200",
    "black_900",
    "white_A700_19",
    "white_A700",
    "indigo_500_deep_purple_A400",
  ]),
};

export { Button };
