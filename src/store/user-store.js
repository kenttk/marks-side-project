import { makeAutoObservable } from "mobx";

class UserStore {
  isLoggedIn = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }
}

export default UserStore;
