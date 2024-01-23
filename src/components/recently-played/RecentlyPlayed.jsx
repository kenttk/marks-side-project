import React from "react";
import "./recently-played.css";

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById("root"));

function RecentlyPlayed() {
  const card = (
    <div>
      <h1>title of music</h1>
      <h2>Artist</h2>
    </div>
  );
  root.render(card);
}

export default RecentlyPlayed;
