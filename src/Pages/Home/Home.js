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
  Filtro,
  TextCopy,
  popUp
} from "./HomeStyle";
import TextField from "@material-ui/core/TextField";
import RestaurantCardHome from "../../components/RestaurantCardHome/RestaurantCardHome";
import Footer from "../../components/Footer/Footer";
import style from './Style.css';
import back from '../../Assets/back.png';
import clock from '../../Assets/clock.png';
import { useHistory } from "react-router-dom";

export default function Home() {
  const { restaurants, setRestaurants } = useRestaurants();
  const history = useHistory();

  
  const goBack = () =>{
    history.goBack()
}

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
          <img src={back} onClick={goBack}/>
      <Header>
        <Title>FutureEats</Title>
      </Header>
      
      <div>
        <InputContainer>
          <TextField
            variant="outlined"
            placeholder="Restaurante"
            className="senha"
            fullWidth
          />
        </InputContainer>
        
        {/* filtro das tags do tipo de comida */}
        <Filtro>
          <TextCopy>Burguer</TextCopy>
          <TextCopy>Asiática</TextCopy>
          <TextCopy>Massas</TextCopy>
          <TextCopy>Saudáveis</TextCopy>
        </Filtro>
        
        <FilterContainer>
          <FilterKey></FilterKey>
        </FilterContainer>
        
        {/* janela apos o pedido ser feito */}
        {/* pode comentar essa janela ate estar funcional*/}

        {/* <div className="popUp">
          <img src={clock} className="clock"/>
          <p className="Pedido-em-andamento">Pedido em andamento</p>
          <p className="Bullguer-Vila-Madale">Bullguer Vila Madalena</p>
          <p className="Bullguer-Vila-Madale">Subtotal R$67,00</p>
        </div> */}


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
