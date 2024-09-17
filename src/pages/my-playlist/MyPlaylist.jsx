import React, { useState } from "react";
// import PlaylistStore from "../../store/playlist-store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import rootStore from "../../store/root-store";
import PlaylistDetailHeader from "../home/components/PlaylistDetailHeader";
import PlaylistDetailBody from "../home/components/PlaylistDetailBody";

const MyPlaylist = () => {
  const { id, artist } = useParams();

  // useEffect hook used for the mounting life cycle.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      rootStore.playlistStore.fetchPlaylistDetails(token, id);
      rootStore.playlistStore.fetchPlaylistSongs(token, artist); // 05.13.2024
    }
  }, []);

  return (
    <div>
      <PlaylistDetailHeader />
      <PlaylistDetailBody />
    </div>
  );
};

export default MyPlaylist;
