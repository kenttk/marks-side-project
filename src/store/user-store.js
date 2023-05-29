import { makeAutoObservable } from "mobx";

class UserStore {
  isLoggedIn = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setIsLoggedIn(value) {
    this.isLoggedIn = value;
    console.log(this.isLoggedIn);
  }
}

export default UserStore;
