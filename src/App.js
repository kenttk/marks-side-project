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

  const initializeAppForLoggedInUser = async (token) => {
    await rootStore.userStore.fetchUserInformation(token);
  }

  // When the app loads, and we detect a token that is saved in localStorage,
  // we need to make sure that the userStore knows that the user is logged in.
  //
  // This will make sure that certain components doesn't show in the app
  // when the user is logged in (i.e. the login button and the sign up button)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      rootStore.userStore.setIsLoggedIn(true);
      initializeAppForLoggedInUser(token);
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
