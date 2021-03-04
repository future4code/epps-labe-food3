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
  CheckBox,
  FoodContainer,
  Rectangle2,
  FoodImage
} from "./styled";
import Buttons from '../../components/Buttons';
import Footer from "../../components/Footer/Footer";
import { useHistory } from 'react-router-dom';


export const CartPage = () => {
    const history = useHistory();
  
  return (
      
    <CartContainer>
      <AdressContainer>
        <AdressDelivery>Endereço de entrega</AdressDelivery>
        
          <p>Buscando endereço...</p>
    
      </AdressContainer>

      <Title>Carrinho vazio</Title>
      
      {/* container teste para receber os produtos */}
      <FoodContainer> 
        <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/95588246-1173-4513-89DA-A6107AFECF60.png" width="100px" height="100px"/>
        <Rectangle2>
          <p>Remover</p>
        </Rectangle2>
       
      </FoodContainer>
     
      <ShippingText>Frete R$</ShippingText>
      <SubtotalPrice>
        <p>SUBTOTAL</p>
        <TotalPrice>R$ 0.00</TotalPrice>
      </SubtotalPrice>

      <PaymentMethodText>Forma de pagamento</PaymentMethodText>
      <CheckBox  >
        <FormControl component="fieldset" required={true}>
          <RadioGroup
            name="metodoDePag"
            value=""
          >
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