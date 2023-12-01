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
    <nav className="py-2 px-2 flex flex-col bg-black sidebar-grid text-[10px]">
      <div className="mb-2">
        <Card>
          <div className="pl-6 mt-5">
            <SideNavItem
              icon={<SpotifyIcon />}
              iconActive={<SpotifyIcon />}
              route="/"
            />
          </div>
          <div className="pl-6">
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
          </div>
        </Card>
      </div>
      <Card>
        <div className="pt-2 pl-5 pr-4 flex justify-between items-center">
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
        <div className="pt-2 ml-2 mx-2 my-2">
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
        <div className="pt-2 ml-2 mx-2 my-2">
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
        <div className="pt-4 pl-4 pb-2">
          <ButtonPill text="English" onClick={() => {}} size="small" />
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="Svg-sc-ytk21e-0 kPpCsU"
          >
            <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path>
          </svg>
        </div>
      </Card>
    </nav>
  );
};

export default observer(SideNav);
