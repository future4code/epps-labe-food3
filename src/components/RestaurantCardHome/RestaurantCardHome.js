import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/components/Home.module.css";


const CardRestaurant = (props) => {
  const history = useHistory();
  
  
  const goToRestaurantPage = (id) => {
    history.push(`restaurant/${id}`);
  }

  return (
    <div className={styles.CardContainer}>
      <div class={styles.RestCard}
        onClick={() => goToRestaurantPage(props.id)}
      >
        <img src={props.logoUrl} className={styles.RestLogo}/>
        <p className={styles.CardName}>{props.name}</p>
        <div className={styles.CardFooter}>
          <p className={styles.CardInfo}>{props.deliveryTime} min</p>
          <p className={styles.CardInfo}>Frete: R$ {parseFloat(props.shipping).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;