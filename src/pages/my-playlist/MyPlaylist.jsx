import React, { useState } from "react";
// import PlaylistStore from "../../store/playlist-store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import rootStore from "../../store/root-store";
import PlaylistDetailHeader from "../home/components/PlaylistDetailHeader";

const MyPlaylist = () => {
  const { id } = useParams();

  // useEffect hook used for the mounting life cycle.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      rootStore.playlistStore.fetchPlaylistDetails(token, id);
      // rootStore.playlistStore.fetchPlaylistSongs(token, id);
    }
  }, []);

  return (
    <div>
      <PlaylistDetailHeader />
    </div>
  );
};

export default MyPlaylist;
