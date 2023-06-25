import { makeAutoObservable, flow } from "mobx";

class PlaylistStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    this.myPlaylists = {};

    makeAutoObservable(this, {
      fetchFeaturedPlaylists: flow,
    });
  }

  setMyPlaylists(response) {
    this.myPlaylists = response;
  }

  *fetchFeaturedPlaylists(token) {
    const response = yield fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const json = yield response.json();

      this.setMyPlaylists(json);
    } else {
      // TODO: make sure to do proper error handling
    }
  }

  get sideBarPlaylists() {
    return this.myPlaylists?.items;
  }
}

export default PlaylistStore;
