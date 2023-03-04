import { Routes, Route } from "react-router-dom";
import React from "react";

import SideNav from "./components/side-nav/SideNav";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const shouldShowHeaderAndSidenav = location.pathname !== "/login";

  return (
    <main className={shouldShowHeaderAndSidenav ? "grid-container" : undefined}>
      {shouldShowHeaderAndSidenav && <Header />}
      {shouldShowHeaderAndSidenav && <SideNav />}
      <div
        className={shouldShowHeaderAndSidenav ? "app-contents-grid" : undefined}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
