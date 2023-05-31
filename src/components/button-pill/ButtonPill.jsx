import React from "react";
import PropTypes from "prop-types";

const ButtonPill = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white transform motion-safe:hover:scale-110 text-black font-24px font-bold py-2 px-4 rounded-full py-2 px-8"
    >
      {text}
    </button>
  );
};

ButtonPill.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default ButtonPill;
