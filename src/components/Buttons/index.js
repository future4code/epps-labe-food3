import React from "react";
import { Button, ContainerButton } from "./styled";

const Buttons = (props) => {
  return (
    <ContainerButton>
      <Button>
        <p>{props.text}</p>
      </Button>
    </ContainerButton>
  );
};

export default Buttons;