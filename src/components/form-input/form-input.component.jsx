import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`} //applying 1 or 2 classes of scss on this element, based on condition
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
