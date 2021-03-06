import React, { useEffect, useState } from "react";
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
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    getRestaurants(setRestaurants);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const onChangeSearchBox = (e) => {
    setSearchText(e.target.value);
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
            className="senha"
            fullWidth
            onChange={onChangeSearchBox}
          />
        </div>

        {/* filtro das tags do tipo de comida */}
        <div className={styles.Filtro}>
          <span className={styles.TextCopy}>Burguer</span>
          <span className={styles.TextCopy}>Asiática</span>
          <span className={styles.TextCopy}>Massas</span>
          <span className={styles.TextCopy}>Saudáveis</span>
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
            restaurants
              .filter((rest) => {
                if (rest.name.toLowerCase().includes(searchText)) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((rest) => {
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
