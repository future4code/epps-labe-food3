import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useCartCtx } from "../../Contexts/CartCtx";
import back from '../../Assets/back.png';

//DESIGN
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  Header,
  Title,  
  TextTitle,
  MainCard,
  MainCardContent,
  ImagesFood,
  CardPrice,
  ButtonAdd,
  ButtonRemove,
  BoxCard,
  TextP,
} from "./styled";
import { getDetailRestaurant } from "../../requests/user";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    alignItems: "space-between",
    height: 120,
    width: 330,
    margin: 5,
  },
  transition: "center",
});

export default function RestaurantCard() {
  const history = useHistory();  
  const classes = useStyles();
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const { products, addCart } = useCartCtx();
  
  console.log(restaurant)
  

  useEffect(() => {
    getDetailRestaurant(id, setRestaurant);
  }, []);

  const goBack = () =>{
    history.goBack()
  }

  return (
    <BoxCard>
          <img src={back} onClick={goBack}/>
      <Header>
        <Title>Restaurantes</Title>
      </Header>  
      <Card>
        <CardMedia
          style={{ borderRadius: "10px 10px 0 0" }}
          image={restaurant.logoUrl}
          className={classes.media}
          title="foto capa restaurante"
        />
        <CardContent>
          <TextTitle gutterBottom variant="h5" component="h2">
            {" "}
            {restaurant.name}{" "}
          </TextTitle>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            {restaurant.category}{" "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            Prazo de entrega ~ {restaurant.deliveryTime} min{" "}
            <p>Frete: R$ {parseFloat(restaurant.shipping).toFixed(2)}</p>{" "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            {restaurant.address}{" "}
          </Typography>
        </CardContent>

        <TextP>Principais</TextP>

        {/* RENDERIZANDO PRODUTOS */}
        {restaurant.products &&
          restaurant.products.map((pdt) => {
            return (
              <MainCard>
                <ImagesFood src={pdt.photoUrl} />

                <MainCardContent>
                  <TextTitle gutterBottom variant="h5" component="h2">
                    {" "}
                    {pdt.name}{" "}
                  </TextTitle>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {" "}
                    {pdt.description}{" "}
                  </Typography>

                  <CardPrice>
                    <p>R$ {pdt.price.toFixed(2)}</p>
                    <CardActions>
                      <ButtonAdd onClick={() => addCart(pdt)}>
                        adicionar
                      </ButtonAdd>
                    </CardActions>
                  </CardPrice>
                </MainCardContent>
              </MainCard>
            );
          })}
      </Card>
    </BoxCard>
  );
}
