import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100vw;
  max-width: 420px;
`;

export const AdressContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  background-color: #eeeeee;
`;

export const AdressDelivery = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 18px;
  margin: 0 0 8px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

export const Title = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 42px;
  margin: 18px 0 33px;
  padding: 12px 32px;
  font-size: 16px;
  text-align: center;
`;

export const ShippingText = styled.p`
  font-size: 16px;
  text-align: right;
  margin: 16px 16px 13px 60px;
`;

export const SubtotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 16px 0 16px;
`;

export const TotalPrice = styled.p`
  color: #5cb646;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.43px;
`;

export const PaymentMethodText = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 18px;
  margin: 24px 16px 8px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`;

export const CheckBox = styled.div`
  margin: 10px 16px 0 16px;
  border-top: 0.5px solid black;
`;

export const FoodContainer = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px lightgray;
`

export const Rectangle2 = styled.div`
  width: 50px;
  height: 20px;
  /* margin: 7px 0 0 8px; */
  padding: 8px 23px 9px 24px;
  border-radius: 8px;
  border: solid 1px #e02020;
  float: right;
`

export const FoodImage = styled.div`
  width: 96px;
  height: 112px;
  margin: 0 16px 0 0;
  object-fit: contain;
  background-image: url("https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/95588246-1173-4513-89DA-A6107AFECF60.png")

`