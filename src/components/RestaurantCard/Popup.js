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
import styles from "../../styles/components/Home.module.css";


const Popup = (props) => {
  const { addCart } = useCartCtx();
  const [selectedValue, setSelectedValue] = useState(1);

  const changeSelectedValue = (e) => {
    setSelectedValue(parseInt(e.target.value));
  };

  return props.trigger ? (
    <div className={styles.BoxPopupAdd}>
      <div className={styles.BoxContainer}>
        <TitleBox>
          <p className={styles.TitleText}>Selecione a quantidade desejada</p>
        </TitleBox>

        <select className={styles.SelectQtd} onChange={changeSelectedValue}>
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
        </select>
        <p className={styles.ButtonP}
          onClick={() => {
            props.setTrigger();
            addCart({ ...props.product, quantity: parseInt(selectedValue) });
          }}
        >
          ADICIONAR AO CARRINHO
        </p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
