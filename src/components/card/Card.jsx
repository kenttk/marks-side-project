import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  return <div className="rounded-lg card ">{children}</div>;
};

export default Card;
