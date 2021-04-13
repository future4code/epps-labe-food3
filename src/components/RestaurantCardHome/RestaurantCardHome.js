import React from "react";
import { useHistory } from "react-router-dom";
import style from '../../styles/components/RestaurantCardHome.module.css'

const CardRestaurant = (props) => {
  const history = useHistory();
  const goToRestaurantPage = (id) => {
    history.push(`restaurant/${id}`);
  };

  return (
    <div className={style.CardContainer}>
      <div className={style.RestCard}
        onClick={() => goToRestaurantPage(props.id)}
      >
        <img className={style.RestLogo} src={props.logoUrl} />
        <p className={style.CardName}>{props.name}</p>
        <div className={style.CardFooter}>
          <p className={style.CardInfo}>{props.deliveryTime} min</p>
          <p className={style.CardInfo}>Frete: R$ {parseFloat(props.shipping).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;