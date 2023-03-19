import React, { useEffect } from "react";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";

import SideNav from "./components/side-nav/SideNav";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";

import rootStore from "./store/root-store";

function App() {
  const location = useLocation();
  const shouldShowHeaderAndSidenav = location.pathname !== "/login";
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      rootStore.userStore.setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const tokenInUri = searchParams.get("code");
    if (tokenInUri) {
      localStorage.setItem("token", tokenInUri);
      rootStore.userStore.setIsLoggedIn(true);
    }
  }, [searchParams]);

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
