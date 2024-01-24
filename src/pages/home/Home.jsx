import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import rootStore from "../../store/root-store";
import RecentlyPlayed from "../../components/recently-played/RecentlyPlayed";

const Home = () => {
  useEffect(() => {
    // We're going to do the following:
    // 1 check if the user is logged in
    // 2, if the user is logged in, fetch playlists

    const token = localStorage.getItem("token");

    if (token) {
      // We should be logged in! Now let's fetch playlists
      rootStore.playlistStore.fetchMyPlaylists(token);
    }
  }, []);
};

export default observer(Home);
