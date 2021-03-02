import styled from 'styled-components'

export const DivContent = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5rem;
align-items: center;
width: 100vw;
`
export const Header = styled.div`
  width: 360px;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.p`
  width: 74px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  display: flex;
  align-content: center;
`;
export const InputContainer = styled.div`
  width: 328px;
  height: 56px;
  margin-top: 8px;
  display: flex;
  margin-left: 16px;
  font-family: Roboto;
`;
export const Input = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 8px;
`;
export const FilterContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 360px;
  height: 42px;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  display: flex;
`;
export const FilterKey = styled.p`
  margin-left: 24px;
  :active {
    color: #e86e5a;
  }
  diplay: flex;
`;
export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;