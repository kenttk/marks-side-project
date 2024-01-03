import UserStore from "./user-store";
import PlaylistStore from "./playlist-store";

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.playlistStore = new PlaylistStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;

//'RootStore' is going to be the single access point for every
// mobx store in the application. AKA we wil always importing
// the rootstore. We never be directly importing the userStore,
// Playlist store or any other store we create.
