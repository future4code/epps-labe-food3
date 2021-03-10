import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import back from "../../Assets/back.png";
import { useCartCtx } from "../../Contexts/CartCtx";

//DESIGN
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { getDetailRestaurant } from "../../requests/user";
import Popup from "./Popup";
import style from "../../styles/components/RestaurantCard.module.css";

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
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showPopup, setshowPopup] = useState(false);
  const { restaurantId, setRestaurantId, setProducts } = useCartCtx();

  useEffect(() => {
    getDetailRestaurant(id, setRestaurant);
  }, []);

  const clickAddPdt = (pdt) => {
    if (restaurantId !== "" && restaurantId !== restaurant.id) {
      if(window.confirm(
        "Este produto é de outro restaurante, deseja criar um novo carrinho?"
      )){
        setProducts([])
      }
    }
    setshowPopup(true);
    setSelectedProduct(pdt);
    setRestaurantId(restaurant.id);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={style.BoxCard}>

      <div className={style.Header}>
        <img src={back} onClick={goBack} />
        <p className={style.TitleHeader}>Restaurante</p>
      </div>
      
      <Card>
        <CardMedia
          style={{ borderRadius: "10px 10px 0 0" }}
          image={restaurant.logoUrl}
          className={classes.media}
          title="foto capa restaurante"
        />
        <CardContent>
          <div
            className={style.TextTitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {" "}
            {restaurant.name}{" "}
          </div>
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

        <p className={style.TextP}>Principais</p>

        {/* RENDERIZANDO PRODUTOS */}
        {restaurant.products &&
          restaurant.products.map((pdt) => {
            return (
              <div className={style.MainCard}>
                <img className={style.ImagesFood} src={pdt.photoUrl} />

                <div className={style.MainCardContent}>
                  <div
                    className={style.TextTitle}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {" "}
                    {pdt.name}{" "}
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {" "}
                    {pdt.description}{" "}
                  </Typography>

                  <div className={style.CardPrice}>
                    <p>R$ {pdt.price.toFixed(2)}</p>
                    <CardActions>
                      <button
                        className={style.ButtonAdd}
                        onClick={() => {
                          clickAddPdt(pdt);
                        }}
                        style={{
                          paddingBottom: "1.4rem",
                          marginBottom: "-17px",
                        }}
                      >
                        adicionar
                      </button>
                    </CardActions>
                  </div>
                </div>
              </div>
            );
          })}
      </Card>

      <Popup
        trigger={showPopup}
        setTrigger={() => setshowPopup(false)}
        product={{ ...selectedProduct, shipping: restaurant.shipping }}
        restaurant={restaurant}
      />
    </div>
  );
}
