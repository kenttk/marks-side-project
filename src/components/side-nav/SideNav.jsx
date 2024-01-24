import React from "react";

import { observer } from "mobx-react-lite";
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
import Card from "../card/Card";
import SpotifyIcon from "../../assets/icons/SpotifyIcon";
import "./side-nav.css";
import ButtonPill from "../button-pill/ButtonPill";

const SideNav = () => {
  return (
    <nav className="px-2 flex flex-col bg-black sidebar-grid text-[10px]">
      <div>
        <Card>
          <div className="pl-6 mt-4 pb-2">
            <SideNavItem
              icon={<SpotifyIcon />}
              iconActive={<SpotifyIcon />}
              route="/"
            />
          </div>
          <div className="pl-6 pb-2">
            <div className="pb-2">
              <SideNavItem
                title="Home"
                icon={<HomeIcon />}
                iconActive={<HomeIconActive />}
                route="/"
              />
            </div>
            <SideNavItem
              title="Search"
              icon={<SearchIcon />}
              iconActive={<SearchIconActive />}
              route="/search"
            />
          </div>
        </Card>
      </div>
      <Card>
        <div className="py-2 px-6 flex justify-between items-center">
          <SideNavItem
            title="Your Library"
            icon={<YourLibraryIcon />}
            route="/library"
            iconActive={<YourLibraryIcon />}
          />
          <button>
            <CreatePlaylistIcon />
          </button>
        </div>
        <div className="ml-2 mx-2 my-2">
          <Card>
            <div className="your-library-nested-card">
              <h2 className="pl-4 mb-1.5 font-bold text-white text-base rounded">
                Create your first playlist
              </h2>
              <h3 className="pl-4 font-normal text-white first-playlist-description">
                It&apos;s easy, we&apos;ll help you
              </h3>
              <div className="pt-4 pl-4 pb-2">
                <ButtonPill
                  text="Create Playlist"
                  onClick={() => {}}
                  size="small"
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="pt-2 ml-2 mx-2">
          <Card>
            <div className="your-library-nested-card">
              <h2 className="pl-4 mb-1.5 font-bold text-white text-base rounded">
                Let&apos;s find some podcasts to follow
              </h2>
              <h3 className="pl-4 font-normal text-white first-playlist-description">
                We&apos;ll keep you updated on new episodes
              </h3>
              <div className="pt-4 pl-4 pb-2">
                <ButtonPill
                  text="Browse Podcasts"
                  onClick={() => {}}
                  size="small"
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="grow pl-5 mt-6 text-[10px]">
          <SideNavItem
            title="Liked Songs"
            icon={<LikedSongsIcon />}
            route="/liked-songs"
          />
        </div>
        {/* map() on line 59:
      1. Creates a new array from calling a function for every array element.
      2. Does not execute the function for empty elements. 
      3. Does not change the orginal array */}
        <div>
          {rootStore.playlistStore.sideBarPlaylists?.map((playlist) => {
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
      </Card>
    </nav>
  );
};

export default observer(SideNav);
