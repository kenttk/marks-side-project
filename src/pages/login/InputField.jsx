import React from "react";



const InputField = ({label, placeholder, type}) => {
    return (
            <label className="flex flex-col text-sm w-full">
                {label}
                <input
                    className="border-2 border rounded border-black p-3.5"
                    type={type || "text"}
                    placeholder={placeholder}
                />
            </label>
    );
}

export default InputField;