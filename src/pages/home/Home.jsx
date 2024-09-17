import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import rootStore from "../../store/root-store";
import HomePlaylistCard from "../../components/home-playlist-card/HomePlaylistCard";
import { Link } from "react-router-dom";

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

  return (
    <div className="px-4">
      <div className="mt-1.5 flex-auto text-white">
        <h2 className="text-xl font-bold mb-4">Recenlty played</h2>
      </div>
      <div className=" grid gap-6 grid-cols-5">
        {rootStore.playlistStore.myPlaylists?.items?.map((playlist) => {
          console.log(playlist.id);
          return (
            // eslint-disable-next-line react/jsx-key
            <Link to={`/playlist/${playlist.id}`}>
              <HomePlaylistCard
                name={playlist.name}
                description={playlist.description}
                imageURL={playlist.images[0].url}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default observer(Home);
