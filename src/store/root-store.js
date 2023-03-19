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
