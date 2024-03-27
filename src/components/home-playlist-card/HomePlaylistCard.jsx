import React from "react";
import PlayIcon from "../../assets/icons/PlayIcon";
import "./home-playlist-card.css";

const HomePlaylistCard = ({ description, imageURL, name }) => {
  return (
      <div className="py-4 bg-black rounded text-white home-playlist-card">
        <div className="m-4">
          <div className="mb-4 relative">
            <img src={imageURL} className="rounded" width="200" height="200"/>
            <button className="home-playlist__play-button">
              <PlayIcon />
            </button>
          </div>
          <div>
            <h2>{name}</h2>
          </div>
            <h4 className="text-sm opacity-40 font-normal">
              {description}
            </h4>
        </div>
      </div> 
  ); 
};

export default HomePlaylistCard;
