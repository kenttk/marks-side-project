import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import ButtonPill from "../button-pill/ButtonPill";
import "./header.css";
import rootStore from "../../store/root-store";

const Header = () => {
  const navigate = useNavigate();
  const logInOnClick = () => {
    navigate("/login");
  };

  return (
    <header className="bg-black header-grid flex p-4">
      {!rootStore.userStore.isLoggedIn ? (
        <div className="ml-auto content-end">
          <ButtonPill text="Log in" onClick={logInOnClick} />
        </div>
      ) : (
        <p className="ml-auto content-end text-white">I'm logged in!!!!</p>
      )}
    </header>
  );
};

export default observer(Header);
//exporting the obect in the current file to make this object
//usable in another file
