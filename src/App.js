import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SideNav from "./components/side-nav/SideNav";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import LoginSuccess from "./pages/login-success/LoginSuccess";

function App() {
  const location = useLocation();

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
