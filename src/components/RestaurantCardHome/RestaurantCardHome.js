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

const CardRestaurant = (props) => {
  const history = useHistory();
  const goToRestaurantPage = (id) => {
    history.push(`restaurant/${id}`);
  };

  return (
    <CardContainer>
      <RestCard
        onClick={() => goToRestaurantPage()}
      >
        <RestLogo src={props.logoUrl} />
        <CardName>{props.name}</CardName>
        <CardFooter>
          <CardInfo>{props.deliveryTime} min</CardInfo>
          <CardInfo>Frete: R$ {parseFloat(props.shipping).toFixed(2)}</CardInfo>
        </CardFooter>
      </RestCard>
    </CardContainer>
  );
};

export default CardRestaurant;