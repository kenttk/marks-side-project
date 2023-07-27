import React from "react";

// eslint-disable-next-line react/prop-types
const Playlist = ({ name, ownerName, imgURL }) => {
  return (
    <div className="flex mb-4">
      <img src={imgURL} className="w-12 h-12 rounded" alt="" />
      <div className="flex-col flex ml-4">
        <p className="text-white">{name}</p>
        <p className="text-zinc-400">Playlist {ownerName}</p>
      </div>
    </div>
  );
};

export default Playlist;
