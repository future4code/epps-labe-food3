import React, { useEffect, useState } from "react";
import style from "./Style.css";
// import logo from "../../Assets/logo.png";
import TextField from "@material-ui/core/TextField";
import {goToSignUp} from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import useForm from "../../Hooks/useForm";
import logo from '../../Assets/logo-future-eats-invert.png';
import LoginForm from "./LoginForm";

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
        <LoginForm/>
      <p>Nao possui cadastro? <Link onClick={()=>goToSignUp(history)}>clique aqui</Link></p>
      
    </div>
  );
};

export default Login;
