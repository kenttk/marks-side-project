import React from "react";

import SpotifyIcon from "../../assets/icons/SpotifyIcon";
import ButtonPill from "../../components/button-pill/ButtonPill";

import generateRandomString from "../../utils/auth/generate-random-string";
import generateCodeChallenge from "../../utils/auth/generate-code-challenge";

import "./login.css";

const Login = () => {
  const spotifyOAuthLogin = async () => {
    const codeVerifier = generateRandomString(128);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    const state = generateRandomString(16);

    const args = new URLSearchParams({
      response_type: "code",
      client_id: "975118d81a2246978387ea890210451f",
      redirect_uri: "http://localhost:3000/login-success",
      state,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });

    const baseUrl = "https://accounts.spotify.com/authorize";

    const href = `${baseUrl}?${args}`;

    window.location.href = href;
  };

  return (
    <div className="bg-green-500 h-screen flex flex-col items-center justify-center">
      <div className="login__spotify-logo svg-mb-8">
        <SpotifyIcon />
      </div>
      <ButtonPill
        text="Login with your Spotify account"
        onClick={spotifyOAuthLogin}
      />
    </div>
  );
};

export default Login;
