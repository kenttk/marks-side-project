import React from "react";

import { observer } from "mobx-react-lite";
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
import rootStore from "../../store/root-store";
import Playlist from "./components/Playlist";

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

        {/* map() on line 59:
      1. Creates a new array from calling a function for every array element.
      2. Does not execute the function for empty elements. 
      3. Does not change the orginal array */}
        <div>
          {rootStore.playliststore.sideBarPlaylists?.map((playlist) => {
            return (
              <Playlist
                key={playlist.id}
                name={playlist.name}
                ownerName={playlist.owner.display_name}
                imgURL={playlist.images[0].url}
                id={playlist.id}
              />
            );
          })}
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
      </div>
    </nav>
  );
};

export default observer(SideNav);
