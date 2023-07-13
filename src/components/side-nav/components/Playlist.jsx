import React from "react";

// eslint-disable-next-line react/prop-types
const Playlist = ({ name, ownerName, imgUrl }) => {
  return (
    <div>
      <img src={imgUrl} alt="" />
      <div>
        <p>{name}</p>
        <p>Playlist • {ownerName}</p>
      </div>
    </div>
  );
};

export default Playlist;
