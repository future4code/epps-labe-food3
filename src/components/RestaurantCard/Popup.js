import React from 'react'
import { BoxContainer, BoxPopupAdd, SelectQtd, TitleBox, TitleText, ButtonP  } from "./styled";

const Popup = () => {
  
  return (
    <BoxPopupAdd>
      <BoxContainer>
        <TitleBox>
          <TitleText>Selecione a quantidade desejada</TitleText>
        </TitleBox>

        <SelectQtd>
          <option value="0"></option>
        </SelectQtd>
        <ButtonP>
          ADICIONAR AO CARRINHO
        </ButtonP>
      </BoxContainer>
    </BoxPopupAdd>
  );
};

export default Popup;