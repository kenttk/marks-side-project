import React from "react";

import SpotifyIcon from "../../assets/icons/SpotifyIcon";
import ButtonPill from "../../components/button-pill/ButtonPill";

import "./login.css";

const Login = () => {
  const spotifyOAuthLogin = () => {
    const clientID = "9ca747e83ecb4bb9bf7a3b13474d7e60";
    const baseUrl = "https://accounts.spotify.com/authorize";
    const redirectUri = "http://localhost:3000";
    const responseType = "code";

    const href = `${baseUrl}?client_id=${clientID}&response_type=${responseType}&redirect_uri=${redirectUri}`;

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
