import { makeAutoObservable, flow } from "mobx";

class PlaylistStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    this.myPlaylists = {};

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

  get sideBarPlaylists() {
    return this.myPlaylists?.items;
  }
}

export default PlaylistStore;
