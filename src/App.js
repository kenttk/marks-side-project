import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SideNav from "./components/side-nav/SideNav";
import header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import rootStore from "./store/root-store";
import LoginSuccess from "./pages/login-success/LoginSuccess";
import MyPlaylist from "./pages/my-playlist/MyPlaylist";

function App() {
  const location = useLocation();

  // "await fetch", passes in end point which is the URL.
  const intializeAppForLoggedInUser = async (token) => {
    await rootStore.userStore.fetchUserInformation(token);
    await rootStore.playliststore.fetchMyPlaylists(token);
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
    <main className="h-full flex flex-col">
      <div className="flex grow">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/my-playlist/:id" element={<MyPlaylist />} />
        </Routes>
      </div>
      <div className="text-black basis-6">footer</div>
    </main>
  );
}

export default App;
