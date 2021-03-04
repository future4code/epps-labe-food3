import React from 'react'

//DESIGN
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextTitle,
  MainCard,
  MainCardContent,
  ImagesFood,
  CardPrice,
  ButtonAdd,
  ButtonRemove,
  BoxCard,
  TextP,
} from "./FoodCardStyle";

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

export default function FoodCard (props) {
  return (
    <MainCard>
    <ImagesFood src={props.photoUrl} />

    <MainCardContent>
      <TextTitle gutterBottom variant="h5" component="h2">
        {" "}
        {props.name}{" "}
      </TextTitle>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {" "}
        {props.description}{" "}
      </Typography>

      <CardPrice>
        <p>R$ {props.price.toFixed(2)}</p>
        <CardActions>
          <ButtonAdd onClick={props.onClickButton}>
            adicionar
          </ButtonAdd>
        </CardActions>
      </CardPrice>
    </MainCardContent>
  </MainCard>
  );
}