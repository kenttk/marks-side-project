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

  // When the app loads, and we detect a token that is saved in localStorage,
  // we need to make sure that the userStore knows that the user is logged in.
  //
  // This will make sure that certain components doesn't show in the app
  // when the user is logged in (i.e. the login button and the sign up button)

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      rootStore.userStore.setIsLoggedIn(true);
    }
  }, []);

  // This useEffect hooks whenever the app loads, and it detects the `code`
  // parameter in the URL.
  // Once it detects the token, which is the value of the code parameter,
  // it will save it in localStorage and also update our userStore so that
  // it knows that the user is logged in.
  useEffect(() => {
    const tokenInUri = searchParams.get("code");
    if (tokenInUri) {
      // The reason why we need to store the token in localStorage is because
      // when the user refreshes the app, we need to make sure that the user
      // doesn't have to login again. It will be a painful user experience when
      // a user constantly has to login every time they load the application.
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
