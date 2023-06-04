import { makeAutoObservable } from "mobx";

class PlaylistStore {
  myPlaylist = [];

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }
}

export default PlaylistStore;
