import React, { useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import rootStore from "../../store/root-store";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const navigateToApp = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const fetchSpotifyAccessToken = useCallback(async () => {
    const code = searchParams.get("code");

    const codeVerifier = localStorage.getItem("code_verifier");

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:3000/login-success",
      client_id: "975118d81a2246978387ea890210451f",
      code_verifier: codeVerifier,
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    if (response.ok) {
      const { access_token, refresh_token } = await response.json();

      localStorage.setItem("token", access_token);
      localStorage.setItem("refreshToken", refresh_token);

      rootStore.userStore.setIsLoggedIn(true);

      navigateToApp();
    }
  }, [navigateToApp, searchParams]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigateToApp();
    } else {
      fetchSpotifyAccessToken();
    }
  }, [fetchSpotifyAccessToken, navigateToApp]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h3>Login successful!</h3>
      <p>One moment please...</p>
    </div>
  );
};

export default LoginSuccess;
