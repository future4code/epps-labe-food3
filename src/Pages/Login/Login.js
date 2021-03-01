import React, { useEffect, useState } from "react";
import style from "./Style.css";
// import logo from "../../Assets/logo.png";
import TextField from "@material-ui/core/TextField";
import {goToSignUp} from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import useForm from "../../Hooks/useForm";
import logo from '../../Assets/logo-future-eats-invert.png';

const Link = styled.u`
cursor: pointer;
`

const Login = () => {
    const history = useHistory();
    const [form, onChange, clear] = useForm({email: "", password: ""})
  
    console.log(form)
    

    // const CheckEmail = () =>{
    //   const re=/\S+@\S+\.\S+/
    //   return(
    //       !re.test(String(form.email).toLowerCase())
    //   )
    // }
 
  return (
    <div className="main">
        <div className="Logo_FutureEats_invert">
          <img src={logo} />
        </div>

      <h1 className="Text">Entrar</h1>
      <TextField
        name="email"
        value={form.email}
        onChange={onChange}
        id="outlined-basic"
        label="e-mail"
        variant="outlined"
        // placeholder="email@email.com"
        className="Input_nolocus"
        required
        // error={CheckEmail()}
        // helperText={CheckEmail()?'Digite um email valido!':''}
      />
      <TextField
        name="password"
        value={form.password}
        onChange={onChange}
        id="outlined-basic"
        label="Minimo 6 caracteres"
        variant="outlined"
        className="Input_nolocus"
        // pattern="[A-Za-z]{3,}" minimo 3 caracts
        //pattern="[.\s\w]{10,}" minimo 10 caracts
        pattern="[.\s\w]{6,}" 
        min="6"
        required
      />
      <button className="Rectangle">Entrar</button>
      <p>Nao possui cadastro? <Link onClick={()=>goToSignUp(history)}>clique aqui</Link></p>
      
    </div>
  );
};

export default Login;
