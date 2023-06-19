import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SideNav from "./components/side-nav/SideNav";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import rootStore from "./store/root-store";
import LoginSuccess from "./pages/login-success/LoginSuccess";

function App() {
  const location = useLocation();

  // "await fetch", passes in end point which is the URL.
  const intializeAppForLoggedInUser = async (token) => {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        //"headers" will exist in every network call. In here we are passing on an
        //"Authorization" header(below).
        Authorization: `Bearer ${token}`, // the 'Bearer' providing proof to spotify.
      },
    });

    //any response status in the <200 range is will return 'response.ok' as True
    if (response.ok) {
      const json = await response.json(); //<--will not get data without this.

      rootStore.userStore.setUserResponseData(json); //calls the setter function in 'user-store.js'.
    } else {
      console.error("Something went really wrong"); //debbuging
    }
  };

  // When the app loads, and we detect a token that is saved in localStorage,
  // we need to make sure that the userStore knows that the user is logged in.
  //
  // This will make sure that certain components doesn't show in the app
  // when the user is logged in (i.e. the login button and the sign up button)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      rootStore.userStore.setIsLoggedIn(true);
      intializeAppForLoggedInUser(token); //calling the function we created in lines 15-20.
    }
  }, []);

  const shouldShowHeaderAndSidenav = () => {
    const routesToHideHeaderAndSidenav = ["/login", "/login-success"];

    return !routesToHideHeaderAndSidenav.includes(location.pathname);
  };

  return (
    <main
      className={shouldShowHeaderAndSidenav() ? "grid-container" : undefined}
    >
      {shouldShowHeaderAndSidenav() && <Header />}
      {shouldShowHeaderAndSidenav() && <SideNav />}
      <div
        className={
          shouldShowHeaderAndSidenav() ? "app-contents-grid" : undefined
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-success" element={<LoginSuccess />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
