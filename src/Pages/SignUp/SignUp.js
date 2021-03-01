import React, { useEffect, useState } from "react";
import style from "./Style.css";
import logo from "../../Assets/logo.png";
import TextField from "@material-ui/core/TextField";


const SignUp = () => {
  return (
    <div className="main">
      <img src={logo} alt='logo' />
      <h1 className="Text">Cadastrar</h1>
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        placeholder="Nome e Sobrenome"
        className="Input_nolocus"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="email@email.com"
        className="Input_nolocus"
      />
      <TextField
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        placeholder="000.000.000-0"
        className="Input_nolocus"
      />
      <TextField
        id="outlined-basic"
        label="Senha"
        variant="outlined"
        placeholder="Mínimo 6 caracteres"
        className="Input_nolocus"
      />
      <TextField
        id="outlined-basic"
        label="Confirmar"
        variant="outlined"
        placeholder="Confirme a senha anterior"
        className="Input_nolocus"
      />
      <button className="Rectangle">Criar</button>
      
    </div>

  )    
}

export default SignUp;
