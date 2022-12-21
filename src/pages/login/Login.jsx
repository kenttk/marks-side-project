import React from "react";

import SpotifyIcon from "../../assets/icons/SpotifyIcon";
import "./login.css";
import InputField from "./InputField";


const Login = () => {
  return (
    <div className="px-2 py-3">
      <div className="login__spotify-logo">
          <SpotifyIcon />
      </div>
      
      <hr />
    <div className="flex justify-center">
      <form className="login_form">
        <div className="mb-4 w-full">
            <InputField
              label="Email address or username" 
              placeholder="Email address or username"
            />
        </div>
              <InputField
                label="Password" 
                placeholder="Password"
                type="password"
              />
        </form>
    </div>
      <div>

      </div>
    </div>
  );
};

export default Login;
