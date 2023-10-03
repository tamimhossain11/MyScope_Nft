import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const FloatingInput = React.forwardRef(
  (
    {
      wrapClassName = "",
      className,
      name,
      labelClasses,
      wrapperClasses,
      labelText,
      defaultText,
      focusedClasses,
      errors = [],
      onChange,
      prefix,
      suffix,

      ...rest
    },
    ref,
  ) => {
    const [value, setValue] = React.useState(defaultText || "");

    function handleChange(e) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div className={`${className}`}>
        {!!prefix && prefix}
        <div className={`input-container group ${wrapperClasses}`}>
          <input
            ref={ref}
            name={name}
            onChange={handleChange}
            className={`${className}`}
            placeholder=" "
            value={value}
            {...rest}
          />
          <label
            className={`transform group-focus-within:translate-y-[4px] group-focus-within:scale-[0.8] ${labelClasses} ${
              value ? "translate-y-[4px] scale-[0.8]" : focusedClasses
            } `}
          >
            {labelText}
          </label>
        </div>
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  },
);

FloatingInput.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  labelClasses: PropTypes.string,
  wrapperClasses: PropTypes.string,
  labelText: PropTypes.string,
  defaultText: PropTypes.string,
  focusedClasses: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
};

FloatingInput.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  labelClasses: "",
  wrapperClasses: "",
  labelText: "",
  defaultText: "",
  focusedClasses: "",
  prefix: null,
  suffix: null,
};

export { FloatingInput };
