import React, { useState } from "react";

import SpotifyIcon from "../../assets/icons/SpotifyIcon";
import { useState } from 'react';

import InputField from "./InputField";
import "./login.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailErorr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailOnChange = (event) => {
    setEmail(event.target.value);
    const inputFieldIsEmpty = event.target.value === '';

    if (inputFieldIsEmpty) {
      setEmailErorr ('Please enter your Spotify username or email address');
    } else {
      setEmailErorr('');
    }
  }

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
    const inputFieldIsEmpty = event.target.value === '';

    if (inputFieldIsEmpty) {
      setPasswordError ('Please enter your password');
    } else {
      setPasswordError('');
    }
  }

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
              placeHolder="Email address or username"
              value={email}
              onChange={emailOnChange}
              errorMessage={emailError}
            />
        </div>
              <InputField
                label="Password" 
                placeHolder="Password"
                type="password"
                value={password}
                onChange={passwordOnChange}
                errorMessage={passwordError}

              />
        </form>
    </div>
      <div>

      </div>
    </div>
  );
};

export default Login;
