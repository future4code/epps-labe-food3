import React, { useEffect } from "react";
import axios from "axios";
import { DivContent ,ButtonEnter} from "./CardCompanyStyle";

export default function CardCompany(props) {
  return (
    <DivContent>
      <p>{props.name}</p>
      <ButtonEnter onClick={props.enterCompany}>Ver produtos</ButtonEnter>
    </DivContent>
  );
}
