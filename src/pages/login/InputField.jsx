import React from "react";

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

export default InputField;
