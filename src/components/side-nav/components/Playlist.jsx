import React from "react";

// eslint-disable-next-line react/prop-types
const Playlist = ({ name, ownerName, imgUrl }) => {
  return (
    <div className="flex">
      <img src={imgUrl} alt="" className="h-12 w-12" />
      <div className="flex flex-col ml-4">
        <p className="text-white font-normal text-base">{name}</p>
        <p className="text-slate-400 font-normal text-sm">
          Playlist • {ownerName}
        </p>
      </div>
    </div>
  );
};

export default Playlist;
