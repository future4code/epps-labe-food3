export const getRestaurantsURL = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`;

export const postLoginURL = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login`;

export const putAddAdress = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address`;

export const headers = {
  headers: {
    auth: localStorage.getItem("token"),
  },
};
