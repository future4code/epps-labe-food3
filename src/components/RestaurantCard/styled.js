import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const BoxCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
`;

export const TextTitle = styled(Typography)`
  font-family: Roboto;
  margin-top: 3px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  color: #5cb646;
`;

export const TextP = styled.p`
  display: flex;
  margin: 0px 12px 5px 12px;
  padding-bottom: 5px;
  font-family: Roboto;
  margin-top: 3px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  color: #000;
  border-bottom: 2px solid #000;
  
`;

export const MainCard = styled.div`
  display: flex;
  width: 328px;
  height: 112px;
  margin: 8px;
  border-radius: 8px;
  align-items: center;
  border: 1px solid #b8b8b8;
  color: #5cb646;
`;

export const MainCardContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 70%;
  justify-content: space-between;
  p {
    width: 200px;
    height: 30px;
    /* margin-top: 5px; */
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
  }
`;

export const ImagesFood = styled.img`
  width: 100px;
  height: 110px;
  margin: 0 17px 0px 0;
  object-fit: contain;
`;

export const CardPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    width: 118px;
    height: 19px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #000;
  }
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-self: flex-end;
  flex-flow: column wrap;
  width: 20vw;
  height: 5vh;
  margin-top: 7px;
  padding: 8px 21px 10px 10px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #5cb646;
  color: #5cb646;
  cursor: pointer;
  background-color: transparent;
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-self: flex-end;
  flex-flow: column wrap;
  width: 90px;
  height: 30px;
  margin-top: 7px;
  padding: 8px 21px 10px 10px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #e02020;
  color: #e02020;
  cursor: pointer;
  background-color: transparent;
`;

export const BoxPopupAdd = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  `;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 328px;
    height: 216px;
    margin: 27px 16px 29px;
    background-color: #ffffff;
    `;

export const TitleBox  = styled.div`
      width: 360px;
      height: 42px;
      margin: 31px 0 0;
      padding: 6px 32px 12px 16px;
      `;

export const TitleText = styled.p`
        width: 296px;
        height: 18px;
        margin: 6px 0 0 16px;
        font-family: "Roboto";
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000000;

        `;

export const SelectQtd = styled.select` 
      width: 295px;
      height: 55px;
      margin: 19px 16px 0;
      padding: 16px;
      border-radius: 4px;
      border: solid 1px grey;
      background: url("https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/30097AB3-DADD-4ABB-B9C3-A009017420E9.svg")
      no-repeat right transparent;
      appearance: none;
      background-position-x: 264px;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #000000;
      `;
    
export const ButtonP = styled.p`
      width: 183px;
      height: 19px;
      margin: 28px 16px 16px 33px;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      text-align: right;
      align-self: flex-end;
      color: #5cb646;
      cursor: pointer;
`;