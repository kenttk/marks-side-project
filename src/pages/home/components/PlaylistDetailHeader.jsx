import React from "react";

const PlaylistDetailHeader = () => {
  return (
    // creating the first <div> with flexbox.
    <div className="flex ml-6">
      <div className="flex w-56 h-56 mt-7">
        <img
          className="rounded"
          src="https://dailymix-images.scdn.co/v2/img/486972d0215af437990698714e81ffdc177ee82f/4/en/default"
          alt=""
        />
      </div>
      <div className="text-white font-light ml-4 mt-14">
        <h1>Playlist</h1>
        <p className="text-8xl font-black mt-0.5 mb-4">Daily Mix 4</p>
        <div className="text-sm font-light size-3.5 mb-3">
          <h3>Dru Hill, t.A.T.u., USHER and more</h3>
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
          <div className="ml-1 text-sm">50 songs, about 3 hr 15 mins</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetailHeader;
