import React from "react";
import PropTypes from "prop-types";

const ButtonPill = ({ text, onClick, size = "normal" }) => {
  const getPadding = () => {
    if (size === "small") {
      return "py-1 px-4";
    }
    return "py-2 px-8";
  };

  return (
    <button
      onClick={onClick}
      className={`bg-white transform motion-safe:hover:scale-110 text-black text-sm font-bold rounded-full ${getPadding()}`}
    >
      {text}
    </button>
  );
};

ButtonPill.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};
export default ButtonPill;
