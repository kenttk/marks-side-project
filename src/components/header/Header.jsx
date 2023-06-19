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
        <img
          className="m1-auto content-end rounded-full"
          src={rootStore.userStore.userProfileImageUrl}
          alt="" //I added this bcuz of the "rule" in esling? I got a caution/error prompt
          style={{ height: 20, width: 20 }}
        />
      )}
    </header>
  );
};

export default observer(Header);
//if you don't user 'observer', it won't pick up the any changes
//made in the MobX stores.
