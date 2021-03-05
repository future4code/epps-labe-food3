import React, { useEffect, useState } from "react";
import { useCartCtx } from "../../Contexts/CartCtx";

/* DESIGN */
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Buttons from "../../components/Buttons";
import Footer from "../../components/Footer/Footer";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useHistory } from "react-router-dom";
import style from '../../styles/components/CardPage.module.css';

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { products, setProducts, shipping } = useCartCtx();
  const [payment, setPayment] = useState("");
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

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  return (
    <div className={style.CartContainer}>
      <div className={style.AdressContainer}>
        <p className={style.AdressDelivery}>Endereço de entrega</p>

        <p>Buscando endereço...</p>
      </div>

      <p className={style.Title}>Carrinho vazio</p>

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

      <p className={style.ShippingText}>
        Frete R${" "}
        {shipping &&
          shipping.reduce(function (a, b) {
            return a + b.shipping;
          },0).toFixed(2)}
      </p>
      <div className={style.SubtotalPrice}>
        <p>SUBTOTAL</p>
        <div className={style.TotalPrice}>R$ {totalPrice.toFixed(2)}</div>
      </div>

      <p className={style.PaymentMethodText}>Forma de pagamento</p>
      <div className={style.CheckBox}>
        <FormControl component="fieldset" required={true}>
          <RadioGroup name="payment" value={payment} onChange={onChangePayment}>
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
      </div>
      <Buttons text="CONFIRMAR" onClick={""}></Buttons>
      <Footer />
    </div>
  );
}

export default CartPage;