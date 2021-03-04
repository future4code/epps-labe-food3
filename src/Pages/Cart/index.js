import React from "react";
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

export const CartPage = () => {
  const { products, setProdutcts, payment, setPayment, addCart } = useCartCtx();
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
              nameButton="rem"
            />
          );
        })}

      <ShippingText>Frete R$</ShippingText>
      <SubtotalPrice>
        <p>SUBTOTAL</p>
        <TotalPrice>R$ 0.00</TotalPrice>
      </SubtotalPrice>

      <PaymentMethodText>Forma de pagamento</PaymentMethodText>
      <CheckBox>
        <FormControl component="fieldset" required={true}>
          <RadioGroup name="metodoDePag" value="">
            <FormControlLabel
              value="dinheiro"
              control={<Radio />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="credito"
              control={<Radio />}
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
