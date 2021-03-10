import React, { useEffect, useState } from "react";
import { placeOrder } from "../../requests/user";
import { useCartCtx } from "../../Contexts/CartCtx";
import { getFullAddress } from "../../requests/user";

/* DESIGN */
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import FoodCard from "../../components/FoodCard/FoodCard";
import back from "../../Assets/back.png";
import { useHistory } from "react-router-dom";
import style from "../../styles/components/CardPage.module.css";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState([]);
  const { products, setProducts, shipping, restaurantId } = useCartCtx();
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

  const confirmBuy = () => {
    const body = {
      products: products.map((pdt) => {
        return {
          id: pdt.id,
          quantity: pdt.quantity,
        };
      }),

      paymentMethod: payment,
    };
    console.log(body);
    placeOrder(restaurantId, body);
  };

  useEffect(() => {
    setTotalPrice(price);
  }, products);

  useEffect(() => {
    getFullAddress(setAddress);
  }, []);

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={style.CartContainer}>
      
      <div className={style.Header}>
        <img src={back} onClick={goBack} />
        <p className={style.TitleHeader}>Meu Carrinho</p>
      </div>
      
      <div className={style.AdressContainer}>
        <p className={style.AdressDelivery}>Endereço de entrega</p>

        <p>
          {address && address.city}-{address.state}, {address.neighbourhood},
          {address.street}, N°{address.number}, complemento {address.complement}
        </p>
      </div>

      {/* <p className={style.Title}>Carrinho vazio</p> */}

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

      <p className={style.ShippingText}>Frete R$ {shipping.toFixed(2)}</p>
      <div className={style.SubtotalPrice}>
        <p>SUBTOTAL</p>
        <div className={style.TotalPrice}>
          R$ {(price + shipping).toFixed(2)}
        </div>
      </div>

      <p className={style.PaymentMethodText}>Forma de pagamento</p>
      <div className={style.CheckBox}>
        <FormControl component="fieldset" required={true}>
          <RadioGroup name="payment" value={payment} onChange={onChangePayment}>
            <FormControlLabel
              value="money"
              control={<Radio color="black" />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio color="black" />}
              label="Cartão de crédito"
            />
            <div className={style.ButtonContainer}>
              <button className={style.ButtonConfirm} onClick={confirmBuy}>CONFIRMAR</button>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
