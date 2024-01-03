import React, { useEffect } from "react";
import rootStore from "../../store/root-store";

const Home = () => {
  useEffect(() => {
    // We're going to do the following:
    // 1 check if the user is logged in
    // 2, if the user is logged in, fetch playlists

    const token = localStorage.getItem("token");

    if (token) {
      // We should be logged in! Now let's fetch playlists
      rootStore.playlistStore.fetchMyPlaylists();
    }
  }, []);

  return <h1>Home</h1>;
};

export default Home;
