import React, { useEffect } from "react";
import { useRestaurants } from "../../Contexts/RestaurantsCtx";
import axios from "axios";
import { getRestaurantsURL, headers } from "../../Constants/Urls";
import { DivContent } from "./HomeStyle";

import CardCompany from "../../components/CardCompany/CardCompany";

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
      {restaurants && renderCompanies}
    </DivContent>
  );
}
