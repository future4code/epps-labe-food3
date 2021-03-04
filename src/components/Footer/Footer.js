import React from "react";
import {
  FooterCard,
  Item1,
  Item2,
  Item3,
  HomepageIcon,
  ShoppingCartIcon,
  AvatarIcon,
} from "./Styled";
import homepage from "../../Assets/homepage.png";
import shoppingCart from "../../Assets/shopping-cart.png";
import avatar from "../../Assets/avatar.png";
import { useHistory } from "react-router-dom";

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
    <FooterCard>
      <Item1>
        <HomepageIcon src={homepage} onClick={goToHomepage} />
      </Item1>
      <Item2>
        <ShoppingCartIcon src={shoppingCart} onClick={goToCart} />
      </Item2>
      <Item3>
        <AvatarIcon src={avatar} onClick={goToProfile} />
      </Item3>
    </FooterCard>
  );
};

export default Footer;
