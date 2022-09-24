import React from "react";

import SideNavItem from "./components/SideNavItem";
import HomeIcon from "../../assets/icons/HomeIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import YourLibraryIcon from "../../assets/icons/YourLibraryIcon";
import CreatePlaylistIcon from "../../assets/icons/CreatePlaylistIcon";
import LikedSongsIcon from "../../assets/icons/LikedSongsIcon";

const SideNav = () => {
    return (
        <nav className="bg-black sidebar-grid text-[10px]"> 
            <div className="mt-4">
                <SideNavItem title="Home" icon={<HomeIcon />} route="/" />
                <SideNavItem title="Search" icon={<SearchIcon />} route="/search" />
                <SideNavItem title="Your Library" icon={<YourLibraryIcon />} route="/library" />
            </div>
            <div className="mt-6 text-[10px]">
                <SideNavItem title="Create Playlist" icon={<CreatePlaylistIcon />} route="/playlist" />
                <SideNavItem title="Liked Songs" icon={<LikedSongsIcon />} route="/liked-songs" />
            </div>
        </nav>
    );
}

export default SideNav;