import { makeAutoObservable } from "mobx";

class PlaylistStore {
  myPlaylists = [];

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }
}

export default PlaylistStore;
