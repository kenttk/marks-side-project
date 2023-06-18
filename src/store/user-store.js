import { makeAutoObservable, flow } from "mobx";

class UserStore {
  isLoggedIn = false;

  userResponse = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      fetchUserInformation: flow
    });
  }

  setIsLoggedIn(value) {
    this.isLoggedIn = value;
  }

  setUserResponseData(data) {
    this.userResponse = data;
  }

  *fetchUserInformation(token) {
    const response = yield fetch('https://api.spotify.com/v1/me',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const json = yield response.json();

      this.setUserResponseData(json);
    } else {
      // TODO: make sure to do proper error handling
    }
  }

  get userProfileImageUrl() {
    if (this.userResponse.images) {
      return this.userResponse?.images[0]?.url;
    }

    return "";
  }
}

export default UserStore;
