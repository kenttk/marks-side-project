import { makeAutoObservable } from "mobx";

// class variables: "isLogged in" and "userData".
class UserStore {
  isLoggedIn = false;
  userData = {};

  userResponse = {};
  // On line 8: we create a variable in user-store.js
  // to hold the user data from spotify.

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setIsLoggedIn(value) {
    this.isLoggedIn = value; //setter function
  }

  setUserResponseData(data) {
    this.userResponse = data;
    console.log(data); //running console log to test.
  }
  // On lines 21-22: we set a "setter functon" that will take the data
  // and se the value

  get userProfileImageUrl() {
    if (this.userResponse.images) {
      return this.userResponse?.images[0]?.url;
    }

    return "";
  }
}

export default UserStore;
