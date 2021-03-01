import React, { useEffect, useState } from "react";
import style from "./Style.css";
// import logo from "../../Assets/img/logo.png";
import TextField from "@material-ui/core/TextField";
import {goToSignUp} from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();

  return (
    <div className="main">
        {/* <img src={logo} /> */}

      <h1 className="Text">Entrar</h1>
      <TextField
        id="outlined-basic"
        label="email@email.com"
        variant="outlined"
        placeholder="email@email.com"
        className="Input_nolocus"
      />
      <TextField
        id="outlined-basic"
        label="Minimo 6 caracteres"
        variant="outlined"
        className="Input_nolocus"
      />
      <button className="Rectangle">Entrar</button>
      <p>Nao possui cadastro? <u>clique aqui</u></p>
      <button onClick={()=>goToSignUp(history)}>Cadastrar</button>
    </div>
  );
};

export default Login;
