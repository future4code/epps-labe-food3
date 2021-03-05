import React from "react";
import homepage from "../../Assets/homepage.png";
import shoppingCart from "../../Assets/shopping-cart.png";
import avatar from "../../Assets/avatar.png";
import { useHistory } from "react-router-dom";
import style from '../../styles/components/Footer.module.css';

const Footer = () => {
  const history = useHistory();

  const goToHomepage = () => {
    history.push("/home");
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const goToProfile = () => {
    history.push("/profile");
  };

  return (
    <div className={style.FooterCard}>
      <div className={style.Item1}>
        <img className={style.HomepageIcon} src={homepage} onClick={goToHomepage} />
      </div>
      <div className={style.Item2}>
        <img className={style.ShoppingCartIcon} src={shoppingCart} onClick={goToCart} />
      </div>
      <div className={style.Item3}>
        <img className={style.AvatarIcon} src={avatar} onClick={goToProfile} />
      </div>
    </div>
  );
};

export default Footer;
