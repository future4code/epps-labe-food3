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
  width: 90px;
  height: 30px;
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