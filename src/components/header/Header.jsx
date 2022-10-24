import React from "react";
import ButtonPill from "../button-pill/ButtonPill";
import "./header.css";

const Header = () => {

  const logInOnClick = () => {
    console.log('Hi');
  }

  const signUpFreeOnClick = () => {
    console.log('Hail Mary');
  }

  return (
    <header className="bg-black header-grid flex p-4">
      <div className="ml-auto content-end">
        <ButtonPill text="Log in" onClick={logInOnClick}/>
        <ButtonPill text="Sign up free" onClick={signUpFreeOnClick}/>
      </div>
    </header>
  );
};

export default Header;
//exporting the obect in the current file to make this object
//usable in another file
