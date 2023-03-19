import React from "react";

import SpotifyIcon from "../../assets/icons/SpotifyIcon";
import SideNavItem from "./components/SideNavItem";
import HomeIconActive from "../../assets/icons/HomeIconActive";
import SearchIcon from "../../assets/icons/SearchIcon";
import YourLibraryIcon from "../../assets/icons/YourLibraryIcon";
import CreatePlaylistIcon from "../../assets/icons/CreatePlaylistIcon";
import LikedSongsIcon from "../../assets/icons/LikedSongsIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import SearchIconActive from "../../assets/icons/SearchIconActive";
import LegalLink from "./components/LegalLink";

const SideNav = () => {
  return (
    <nav className="flex flex-col bg-black sidebar-grid text-[10px]">
      <div className="pl-4 mb-4 spotify-logo text-white">
        <SpotifyIcon />
      </div>
      <div className="mt-4">
        <SideNavItem
          title="Home"
          icon={<HomeIcon />}
          iconActive={<HomeIconActive />}
          route="/"
        />
        <SideNavItem
          title="Search"
          icon={<SearchIcon />}
          iconActive={<SearchIconActive />}
          route="/search"
        />
        <SideNavItem
          title="Your Library"
          icon={<YourLibraryIcon />}
          route="/library"
        />
      </div>
      <div className="grow mt-6 text-[10px]">
        <SideNavItem
          title="Create Playlist"
          icon={<CreatePlaylistIcon />}
          route="/playlist"
        />
        <SideNavItem
          title="Liked Songs"
          icon={<LikedSongsIcon />}
          route="/liked-songs"
        />
      </div>
      <div className="flex flex-col space-y-2 ml-4 pb-10">
        <LegalLink
          href="https://www.spotify.com/legal/cookies-policy/"
          title="Cookies"
        />
        <LegalLink
          href="https://www.spotify.com/ca-en/legal/privacy-policy/"
          title="Privacy"
        />
        {/* self closing element  */}
      </div>
    </nav>
  );
};

export default SideNav;
