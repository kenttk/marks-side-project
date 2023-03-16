import React from "react";

const LegalLink = ({ href, title }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span className="text-gray-400 text-[11px] no-underline hover:underline">
        {title}
      </span>
    </a>
  );
};

export default LegalLink;
