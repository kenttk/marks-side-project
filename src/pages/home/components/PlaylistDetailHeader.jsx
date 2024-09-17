import React from "react";
import rootStore from "../../../store/root-store";
import { observer } from "mobx-react-lite";

const PlaylistDetailHeader = () => {
  console.log(rootStore.playlistStore.playlistDetailArtists);
  return (
    // creating the first <div> with flexbox.
    <div className="flex ml-6">
      <div className="flex w-56 h-56 mt-7">
        <img
          className="rounded"
          src={rootStore.playlistStore.playlistDetailImg}
          alt=""
        />
      </div>
      <div className="text-white font-light ml-4 mt-14">
        <h1>Playlist</h1>
        {rootStore.playlistStore.playlistDetailName}
        <div className="text-sm font-light size-3.5 mb-3">
          <h3>{rootStore.playlistStore.playlistDetailArtists}</h3>
        </div>
        <div className="flex">
          <img
            className="w-6 h-6 flex"
            src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
            alt=""
          />
          <div className="ml-1 font-bold text-sm">
            <h3>Spotify &bull;</h3>
          </div>
          <div className="ml-1 text-sm">
            50 songs,{rootStore.playlistStore.playlistDetailDuration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(PlaylistDetailHeader);
