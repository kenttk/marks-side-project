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
    <header className="header-grid flex p-4 justify-between items-center">
      <div className="flex items-stretch space-x-1.5">
        <div className="bg-black h-8 w-8 flex items-center justify-center rounded-full">
          <button className="h-4 w-4 fill-white m-2">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF"
              viewBox="0 0 16 16"
            >
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </button>
        </div>
        <div className="bg-black bg-black h-8 w-8 flex items-center justify-center rounded-full">
          <button className="h-4 w-4 fill-white bg-black rounded-full m-2">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="text-gray-400 items-center flex space-x-4">
        <button
          className="Button-sc-1dqy6lx-0 IuCQd sNde2kloCY28V4GB9AvP"
          data-encore-id="buttonTertiary"
        >
          Premium
        </button>
        <button
          className="Button-sc-1dqy6lx-0 IuCQd sNde2kloCY28V4GB9AvP"
          data-encore-id="buttonTertiary"
        >
          Support
        </button>
        <button
          className="Button-sc-1dqy6lx-0 IuCQd sNde2kloCY28V4GB9AvP"
          data-encore-id="buttonTertiary"
        >
          Download
        </button>
        <div className="white-vertical-line"></div>
        {/* So when I add that code above the circle of the arrow buttons 
        get oval like shape */}
        <button
          className="Button-sc-1dqy6lx-0 eOxaqu sibxBMlr_oxWTfBrEz2G py-2 pl-2 pr-8"
          data-encore-id="buttonTertiary"
        >
          Sign up
        </button>
        {!rootStore.userStore.isLoggedIn ? (
          <ButtonPill text="Log in" onClick={logInOnClick} />
        ) : (
          <img
            className="rounded-full"
            src={rootStore.userStore.userProfileImageUrl}
            alt="" //I added this bcuz of the "rule" in esling? I got a caution/error prompt
            style={{ height: 20, width: 20 }}
          />
        )}
      </div>
    </header>
  );
};

export default observer(Header);
//if you don't user 'observer', it won't pick up the any changes
//made in the MobX stores.
