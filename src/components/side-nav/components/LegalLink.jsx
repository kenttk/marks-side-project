import React from "react";
import PropTypes from "prop-types";

const LegalLink = ({ href, title }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span className="text-gray-400 text-[11px] no-underline hover:underline">
        {title}
      </span>
    </a>
  );
};

LegalLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LegalLink;
