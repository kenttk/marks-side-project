import { makeAutoObservable, flow } from "mobx";

// class variables: "isLogged in" and "userData".
class UserStore {
  isLoggedIn = false;

  // Create a variable in user-store.js
  // to hold the user data from spotify.
  userResponse = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      fetchUserInformation: flow,
    });
  }

  setIsLoggedIn(value) {
    this.isLoggedIn = value; //setter function
  }

  setUserResponseData(data) {
    this.userResponse = data;
  }
  // On lines 21-22: we set a "setter functon" that will take the data
  // and se the value

  *fetchUserInformation(token) {
    const response = yield fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const json = yield response.json();

      this.setUserResponseData(json);
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
