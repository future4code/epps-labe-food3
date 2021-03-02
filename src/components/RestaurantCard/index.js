import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { TextTitle, MainCard, MainCardContent, ImagesFood, CardPrice, ButtonAdd, ButtonRemove, BoxCard, TextP } from "./styled";

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
    const classes = useStyles();

    return (
        <BoxCard>
            <Card>

                <CardMedia
                    style={{ borderRadius: "10px 10px 0 0" }}
                    image="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/408EC97E-C392-4921-BD6C-055A5175BCBC.png"
                    className={classes.media}
                    title="foto capa restaurante"
                />
                <CardContent>
                    <TextTitle gutterBottom variant="h5" component="h2"> Bullguer Villa Mariana </TextTitle>
                    <Typography variant="body2" color="textSecondary" component="p"> Burger </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> 50 - 60 min <p>Frete: R$ 6,00</p> </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> R. Fradique Coltinho, 1136 - Vila Mariana </Typography>
                </CardContent>

                <TextP>Principais</TextP>
              
                <MainCard>
                    <ImagesFood src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/95588246-1173-4513-89DA-A6107AFECF60.png" />

                    <MainCardContent>
                        <TextTitle gutterBottom variant="h5" component="h2"> Bullguer </TextTitle>
                        <Typography variant="body2" color="textSecondary" component="p"> Pão, carne, queijo, picles e molho </Typography>

                        <CardPrice>
                            <p>R$ 20,00</p>
                            <CardActions>
                                <ButtonAdd>adicionar</ButtonAdd>
                            </CardActions>
                        </CardPrice>
                    </MainCardContent>
                </MainCard>
                <MainCard>
                    <ImagesFood src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/95588246-1173-4513-89DA-A6107AFECF60.png" />

                    <MainCardContent>
                        <TextTitle gutterBottom variant="h5" component="h2"> Stencil </TextTitle>
                        <Typography variant="body2" color="textSecondary" component="p"> Pão, carne, queijo, cebola roxa, tomate, alface e molho </Typography>

                        <CardPrice>
                            <p>R$ 23,00</p>
                            <CardActions>
                                <ButtonRemove>remover</ButtonRemove>
                            </CardActions>
                        </CardPrice>
                    </MainCardContent>
                </MainCard>
            </Card>
        </BoxCard>
    );
}