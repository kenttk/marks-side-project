import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  return <div className="mt-1.5 rounded-lg card flex-auto">{children}</div>;
};

export default Card;
