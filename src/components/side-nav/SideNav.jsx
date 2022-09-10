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
            <SideNavItem title="Home" icon={<HomeIcon />} />
            <SideNavItem title="Search" icon={<SearchIcon />} />
            <SideNavItem title="Your Library" icon={<YourLibraryIcon />} />
            <div className="mt-6 text-[10px]">
                <SideNavItem title="Create Playlist" icon={<CreatePlaylistIcon />} />
                <SideNavItem title="Liked Songs" icon={<LikedSongsIcon />} />
            </div>
        </nav>
    );
}

export default SideNav;