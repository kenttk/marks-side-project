import { makeAutoObservable } from "mobx";

class UserStore {
  isLoggedIn = false;

  userResponse = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setIsLoggedIn(value) {
    this.isLoggedIn = value;
  }

  setUserResponseData(data) {
    this.userResponse = data;
  }

  get userProfileImageUrl() {
    if (this.userResponse.images) {
      return this.userResponse?.images[0]?.url;
    }

    return "";
  }
}

export default UserStore;
