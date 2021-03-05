import React, { useEffect, useState } from "react";
import { useCartCtx } from "../../Contexts/CartCtx";

/* DESIGN */
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import {
  AdressDelivery,
  AdressContainer,
  CartContainer,
  Title,
  ShippingText,
  SubtotalPrice,
  TotalPrice,
  PaymentMethodText,
  CheckBox,
} from "./styled";
import Buttons from "../../components/Buttons";
import Footer from "../../components/Footer/Footer";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useHistory } from "react-router-dom";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);
  const { products, setProducts } = useCartCtx();
  const history = useHistory();

  const removeItem = (item) => {
    const newArray = products.filter((pdt) => {
      return pdt.id !== item.id;
    });
    setProducts(newArray);
  };

  const price = products.reduce(function (prev, pdt) {
    return pdt.price * pdt.quantity + prev;
  }, 0);

  useEffect(() => {
    setTotalPrice(price);
  }, products);

  return (
    <CartContainer>
      <AdressContainer>
        <AdressDelivery>Endereço de entrega</AdressDelivery>

        <p>Buscando endereço...</p>
      </AdressContainer>

      <Title>Carrinho vazio</Title>

      {/* container teste para receber os produtos */}
      {products &&
        products.map((pdt) => {
          return (
            <FoodCard
              photoUrl={pdt.photoUrl}
              name={pdt.name}
              description={pdt.description}
              price={pdt.price}
              quantity={pdt.quantity}
              nameButton="rem"
              onClickButtonRemove={() => removeItem(pdt)}
            />
          );
        })}

      <ShippingText>Frete R$ {totalShipping.toFixed(2)}</ShippingText>
      <SubtotalPrice>
        <p>SUBTOTAL</p>
        <TotalPrice>R$ {totalPrice.toFixed(2)}</TotalPrice>
      </SubtotalPrice>

      <PaymentMethodText>Forma de pagamento</PaymentMethodText>
      <CheckBox>
        <FormControl component="fieldset" required={true}>
          <RadioGroup name="metodoDePag" value="">
            <FormControlLabel
              value="dinheiro"
              control={<Radio color="black" />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="credito"
              control={<Radio color="black" />}
              label="Cartão de crédito"
            />
          </RadioGroup>
        </FormControl>
      </CheckBox>
      <Buttons text="CONFIRMAR" onClick={""}></Buttons>
      <Footer />
    </CartContainer>
  );
};

export default CartPage;
