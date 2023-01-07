import React from "react";

import SpotifyIcon from "../../assets/icons/SpotifyIcon";
import { useState } from 'react';

import InputField from "./InputField";
import "./login.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailOnChange = (event) => {
    setEmail(event.target.value);
    const inputFieldIsEmpty = event.target.value === '';

    if (inputFieldIsEmpty) {
      setEmailError('Please enter your Spotify username or email address');
    } else {
      setEmailError('');
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
              placeholder="Email address or username"
              value={email}
              onChange={emailOnChange}
              errorMessage={emailError}
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
