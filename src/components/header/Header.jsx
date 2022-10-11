import React from "react";
import SpotifyHeader from "./components/SpotifyHeader";
import ButtonPill from "../button-pill/ButtonPill";
import "./header.css";


const Header = () => {
    return (
        <header className="bg-black header-grid flex">
            <SpotifyHeader />
            <div className="ml-auto">
                <ButtonPill />
            </div>
        </header>
    );
}

export default Header;
//exporting the obect in the current file to make this object
//usable in another file