import React from "react";
import SpotifyHeader from "./components/SpotifyHeader";
import "./header.css";

const Header = () => {
    return (
        <header className="bg-black header-grid">
            <SpotifyHeader />
        </header>
    );
}

export default Header;
//exporting the obect in the current file to make this object
//usable in another file