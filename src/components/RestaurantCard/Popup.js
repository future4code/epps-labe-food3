import React from "react";
import {
  BoxContainer,
  BoxPopupAdd,
  SelectQtd,
  TitleBox,
  TitleText,
  ButtonP,
} from "./styled";

const Popup = (props) => {
  return props.trigger ? (
    <BoxPopupAdd>
      <BoxContainer>
        <TitleBox>
          <TitleText>Selecione a quantidade desejada</TitleText>
        </TitleBox>

        <SelectQtd>
          <option value="0"></option>
        </SelectQtd>
        <ButtonP onClick={props.setTrigger}>ADICIONAR AO CARRINHO</ButtonP>

      </BoxContainer>
    </BoxPopupAdd>
  ) : 
    ""
  
};

export default Popup;
