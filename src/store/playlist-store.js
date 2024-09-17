import { makeAutoObservable, flow } from "mobx";
// import { useState } from "react";

class PlaylistStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    this.myPlaylists = {};
    this.playlistDetails = {};

    makeAutoObservable(this, {
      fetchMyPlaylists: flow,
    });
  }

  setMyPlaylists(response) {
    this.myPlaylists = response;
  }

  *fetchMyPlaylists(token) {
    const response = yield fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const json = yield response.json();

      this.setMyPlaylists(json);
    }
  }

  *fetchPlaylistSongs(token, id) {
    const response = yield fetch(
      `https://api.spotify.com/v1/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const json = yield response.json();
      console.log(json);
    }
  }

  *fetchPlaylistDetails(token, id) {
    const response = yield fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const json = yield response.json();
      console.log(json);

      this.playlistDetails = json;
    }
  }

  get sideBarPlaylists() {
    return this.myPlaylists?.items;
  }

  get playlistDetailImg() {
    return this.playlistDetails.images?.[0]?.url;
  }

  get playlistDetailName() {
    return this.playlistDetails?.name;
  }

  get playlistDetailArtists() {
    const artists = [];

    this.playlistDetails?.tracks?.items?.forEach((item) => {
      const artistName = item.track?.artists?.[0].name;
      artists.push(artistName);
    });

    const uniqueArtists = [...new Set(artists)];

    if (uniqueArtists.length === 0) {
      return "";
    }

    return `${uniqueArtists[0]}, ${uniqueArtists[1]}, ${uniqueArtists[2]}, and more`;
  }

  convertMillisecondsToHoursAndMinutes(ms) {
    const totalMinutes = Math.floor(ms / 60000); // converts milliseconds to min.
    const hours = Math.floor(totalMinutes / 60); // converts mins to hours.
    const minutes = totalMinutes % 60; // gets remaining minutes after converting to hours.
    return `${hours} hours and ${minutes} minutes`;
  }

  get playlistDetailDuration() {
    let duration = 0;

    this.playlistDetails?.tracks?.items?.forEach((item) => {
      const trackDuration = item.track?.duration_ms;
      duration += trackDuration;
    });
    return this.convertMillisecondsToHoursAndMinutes(duration);
  }
}

export default PlaylistStore;
