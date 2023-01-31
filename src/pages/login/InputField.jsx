import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  placeHolder,
  type,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <label className="flex flex-col text-sm w-full">
      {label}
      <input
        // ${errorMessage ? 'border-rose-500' : 'border-black'} is a ternary statement. Basically it's a fancy
        // word and shortcut for doing an if/else statement
        // if (errorMessage) {
        //  set the border to red
        // } else {
        //  set the border to black
        // }
        className={`border-2 border rounded p-3.5 ${
          errorMessage ? "border-rose-500" : "border-black"
        }`}
        type={type || "text"}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default InputField;
