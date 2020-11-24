import React from "react";
import cn from "classnames";
import "./FormInput.scss";

const FormInput = ({ hangleChange, label, ...otherProps }) => {
  const labelClasses = cn("form-input-label", {
    shrink: otherProps.value.length,
  });
  const labelView = <label className={labelClasses}>{label}</label>;

  return (
    <div className="group">
      <input
        className="form-input"
        type="text"
        onChange={hangleChange}
        {...otherProps}
      />
      {label && labelView}
    </div>
  );
};

export default FormInput;
