import React from "react";
import { useHistory } from "react-router-dom";

import {
  RestCard,
  RestLogo,
  CardFooter,
  CardName,
  CardInfo,
  CardContainer,
} from "./styled";

const CardRestaurant = () => {
  const history = useHistory();
  const goToRestaurantPage = (id) => {
    history.push(`restaurant/${id}`);
  };

  return (
    <CardContainer>
      <RestCard
        onClick={() => goToRestaurantPage()}
      >
        <RestLogo src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/408EC97E-C392-4921-BD6C-055A5175BCBC.png' />
        <CardName>Burger King</CardName>
        <CardFooter>
          <CardInfo>60 min</CardInfo>
          <CardInfo>Frete: R$ 10,00</CardInfo>
        </CardFooter>
      </RestCard>
    </CardContainer>
  );
};
export default CardRestaurant;