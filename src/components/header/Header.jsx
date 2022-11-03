import React from "react";
import ButtonPill from "../button-pill/ButtonPill";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logInOnClick = () => {
    navigate("/login");
  };

  return (
    <header className="bg-black header-grid flex p-4">
      <div className="ml-auto content-end">
        <ButtonPill text="Log in" onClick={logInOnClick} />
      </div>
    </header>
  );
};

export default Header;
//exporting the obect in the current file to make this object
//usable in another file
