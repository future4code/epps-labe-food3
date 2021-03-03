import React from 'react'
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
  DivBorder,
  CheckBox,
} from "./styled";
import Buttons from '../../components/Buttons';

export const CartPage = () => {
  
  return (
      
    <CartContainer>
      <AdressContainer>
        <AdressDelivery>Endereço de entrega</AdressDelivery>
        
          <p>Buscando endereço...</p>
      </AdressContainer>

      <Title>Carrinho vazio</Title>
     
      <ShippingText>Frete R$</ShippingText>
      <SubtotalPrice>
        <p>SUBTOTAL</p>
        <TotalPrice>R$ 0.00</TotalPrice>
      </SubtotalPrice>

      <PaymentMethodText>Forma de pagamento</PaymentMethodText>
      <CheckBox>
        <FormControl component="fieldset" required={true}>
          <RadioGroup
            name="metodoDePag"
            value=""
          >
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
    </CartContainer>
    
  );
};