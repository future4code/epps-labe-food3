import React, { useEffect } from "react";
import { useRestaurants } from "../../Contexts/RestaurantsCtx";
import TextField from "@material-ui/core/TextField";
import RestaurantCardHome from "../../components/RestaurantCardHome/RestaurantCardHome";
import Footer from "../../components/Footer/Footer";
import back from "../../Assets/back.png";
import clock from "../../Assets/clock.png";
import { useHistory } from "react-router-dom";
import { getRestaurants } from "../../requests/user";
import styles from "../../styles/components/Home.module.css";

export default function Home() {
  const { restaurants, setRestaurants } = useRestaurants();
  const history = useHistory();

  useEffect(() => {
    getRestaurants(setRestaurants);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.DivContent}>
      <img src={back} onClick={goBack} />
      <div className={styles.Header}>
        <p className={styles.Title}>FutureEats</p>
      </div>

      <div>
        <div className={styles.InputContainer}>
          <TextField
            variant="outlined"
            placeholder="Restaurante"
            className={styles.senha}
            fullWidth
          />
        </div>

        {/* filtro das tags do tipo de comida */}
        <div className={styles.Filtro}>
          <span class={styles.TextCopy}>Burguer</span>
          <span class={styles.TextCopy}>Asiática</span>
          <span class={styles.TextCopy}>Massas</span>
          <span class={styles.TextCopy}>Saudáveis</span>
        </div>

        <div className={styles.FilterContainer}>
          <p className={styles.FilterKey}></p>
        </div>

        {/* janela apos o pedido ser feito */}
        {/* pode comentar essa janela ate estar funcional*/}

        {/* <div className={styles.popUp}>
          <img src={clock} className={styles.clock}/>
          <p className={styles.PedidoContainer}>Pedido em andamento</p>
          <p className={styles.BurguerBox}>Bullguer Vila Madalena</p>
          <p className={styles.BurguerBox}>Subtotal R$67,00</p>
        </div> */}

        <div className={styles.RestaurantContainer}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
