import React from "react";

//DESIGN
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import style from '../../styles/components/FoodCard.module.css'

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

export default function FoodCard(props) {
  return (
    <div className={style.MainCard}>
      <img className={style.ImagesFood} src={props.photoUrl} />

      <div className={style.MainCardContent}>
        <div className={style.TextTitle} gutterBottom variant="h5" component="h2">
          {" "}
          {props.name}{" "}
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          {" "}
          {props.description}{" "}
        </Typography>

        <div className={style.CardPrice}>
          <p>R$ {props.price && props.price.toFixed(2)}</p>
          <p>x {props.quantity && props.quantity} units</p>
          <CardActions>
            <button className={style.ButtonRemove} onClick={props.onClickButtonRemove}>
              {props.nameButton === "add" ? "Adicionar" : "Remover"}
            </button>
          </CardActions>
        </div>
      </div>
    </div>
  );
}
