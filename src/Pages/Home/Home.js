import React, { useEffect } from "react";
import { useRestaurants } from "../../Contexts/RestaurantsCtx";
import axios from "axios";
import { getRestaurantsURL, headers } from "../../Constants/Urls";
import {
  DivContent,
  Header,
  Title,
  InputContainer,
  FilterContainer,
  FilterKey,
  RestaurantContainer,
} from "./HomeStyle";
import TextField from "@material-ui/core/TextField";
import RestaurantCardHome from "../../components/RestaurantCardHome/RestaurantCardHome";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const { restaurants, setRestaurants } = useRestaurants();

  const getRestaurants = () => {
    axios
      .get(getRestaurantsURL, headers)
      .then((res) => {
        setRestaurants(res.data.restaurants);
        console.log("Restaurants: ", restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <DivContent>
      <Header>
        <Title>FutureEats</Title>
      </Header>
      <div>
        <InputContainer>
          <TextField
            variant="outlined"
            placeholder="Procurar restaurante"
            fullWidth
          />
        </InputContainer>
        <FilterContainer>
          <FilterKey></FilterKey>
        </FilterContainer>

        <RestaurantContainer>
          {restaurants &&
            restaurants.map((rest) => {
              return (
                <RestaurantCardHome
                key={rest.id}
                id={rest.id}
                  name={rest.name}
                  logoUrl={rest.logoUrl}
                  deliveryTime={rest.deliveryTime}
                  shipping={rest.shipping}
                />
              );
            })}
        </RestaurantContainer>
      </div>
      <Footer />
    </DivContent>
  );
}
