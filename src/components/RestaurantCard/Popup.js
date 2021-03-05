import React, { useEffect, useState } from "react";
import { useCartCtx } from "../../Contexts/CartCtx";
import {
  BoxContainer,
  BoxPopupAdd,
  SelectQtd,
  TitleBox,
  TitleText,
  ButtonP,
} from "./styled";

const Popup = (props) => {
  const { addCart } = useCartCtx();
  const [selectedValue, setSelectedValue] = useState(1);

  const changeSelectedValue = (e) => {
    setSelectedValue(parseInt(e.target.value));
  };

  return props.trigger ? (
    <BoxPopupAdd>
      <BoxContainer>
        <TitleBox>
          <TitleText>Selecione a quantidade desejada</TitleText>
        </TitleBox>

        <SelectQtd onChange={changeSelectedValue}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </SelectQtd>
        <ButtonP
          onClick={() => {
            props.setTrigger();
            addCart({ ...props.product, quantity: parseInt(selectedValue) });
          }}
        >
          ADICIONAR AO CARRINHO
        </ButtonP>
      </BoxContainer>
    </BoxPopupAdd>
  ) : (
    ""
  );
};

export default Popup;
