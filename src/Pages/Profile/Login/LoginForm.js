import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Style.css";
import TextField from "@material-ui/core/TextField";
import { goToSignUp, goToAdress } from "../../../Routes/Coordinator";
import useForm from "../../../Hooks/useForm";
import logo from '../../../Assets/logo-future-eats-invert.png';
import styled from "styled-components";

const LoginForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [type, settype] = useState("password");
  
  //   const clickSubmittion = (event) => {
  //     event.preventDefault();
  //     console.log(form);
  //     login(form, clear, history)
  //   };

//   const showPassword = () => {
//     if (type === "password") {
//       settype("text");
//     } else {
//       settype("password");
//     }
//   };

  const handleLogin = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login",
        form
      )
      .then((res) => {
        alert("ok");
        // console.log(res.data);
        // console.log(res.data.user.name)
        localStorage.setItem("token", res.data.token)
        console.log(res.data.token)
        
        if(res.data.user.hasAddress===false){
            alert(`Olá ${res.data.user.name} vc nao possui um end associado, estamos te redirecionando..`)
            goToAdress(history);
        }else{
            alert('BEM VINDO')
        }
        clear();

      })
      .catch((error) => {
        alert("deu erro no login");
        console.log(error.response);
      })
  };

  return (
    <>
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
        <button className="Rectangle" onClick={handleLogin}>ENTRAR</button>
      </div>
    </>
  );
};

export default LoginForm;
