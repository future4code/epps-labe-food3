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
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardCompany from "../../components/CardCompany/CardCompany";
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

  const renderCompanies = restaurants.map((rest) => {
    return <CardCompany id={rest.id} name={rest.name} />;
  });

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
          <TextField variant='outlined' placeholder='Procurar restaurante' fullWidth/>

        </InputContainer>
        <FilterContainer>
          <FilterKey>
          </FilterKey>
        </FilterContainer>
        <RestaurantContainer>
          <RestaurantCardHome/>
        </RestaurantContainer>
      </div>
      <Footer/>
      {restaurants && renderCompanies}
    </DivContent>
  );
}
