import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL/BASE_URL";
import { goToAdress, goToFeed } from "../Routes/Coordinator";

// *************** axios do login ***************** //

export const handleLogin = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      alert("ok");
      // console.log(res.data);
      // console.log(res.data.user.name)
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);

      if (res.data.user.hasAddress === false) {
        alert(
          `Olá ${res.data.user.name} você não possui um endereço associado. estamos te redirecionando...`
        );
        goToAdress(history);
      } else {
        alert("BEM VINDO");
        // goToFeed(history);
        goToFeed(history);
      }
      clear();
    })
    .catch((error) => {
      alert("deu erro no login");
      console.log(error.response);
    })
}

// *************** axios do endereco ***************** //


export const handleAdress = (body, clear, history) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    }
  }

  axios
    .put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
      alert("end criado com sucesso");
      console.log(res.data);
      clear();
    })
    .catch((error) => {
      alert("end deu erro");
      console.log(error.response);
    })
}

// *************** axios do perfil do usuário ***************** //


export const getProfile = (setProfile) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    }
  }

  axios
    .get(`${BASE_URL}/profile`, headers)
    .then((response) => setProfile(response.data.user))
    .catch((error) => {
      console.log(error.response);
    })
}

// *************** axios dos restaurantes ***************** //


export const getRestaurants = (setRestaurants) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token")
    }
  }
  axios
    .get(`${BASE_URL}/restaurants`, headers)
    .then((response) => setRestaurants(response.data.restaurants))
    // console.log("Restaurants: ", restaurants);
    .catch((err) => {
      console.log(err.response);
    })
}

// *************** axios dos detalhes do restaurante ***************** //


export const getDetailRestaurant = (id, setRestaurant) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token")
    }
  }
  axios
    .get(`${BASE_URL}/restaurants/${id}`, headers)
    .then((response) => setRestaurant(response.data.restaurant))
    // .then((res) => {
    //   console.log(res.data.restaurant);
    //   setRestaurant(res.data.restaurant);
    // })
    .catch((err) => {
      console.log(err.response);
    })
}

