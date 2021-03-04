import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import useForm from "../../Hooks/useForm";
import logo from "../../Assets/logo-future-eats-invert.png";
import axios from "axios";
import back from '../../Assets/back.png';
import { useHistory } from "react-router-dom";
import showSenha from '../../Assets/senha.png';
import hidePassword from "../../Assets/senha-2.png";
import {goToFeed} from '../../Routes/Coordinator';
import {BoxCard} from './styled';
import style from './Style.css';

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const history = useHistory();
  const [type, settype] = useState("password");

 
  const goBack = () =>{
    history.goBack()
}

const showPassword = () => {
  if (type === "password") {
    settype("text");
  } else {
    settype("password");
    
  }
}


  const CheckEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return !re.test(String(form.email).toLowerCase());
  };

  const CheckPassword = () => {
    if (type === "form.password") {
      settype("text");
    } else {
      settype("form.password");
    }
  };



  const handleSignUp = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup",
        form
      )
      .then((res) => {
        alert("Cadastrado com sucesso");
        console.log(res.data);
        clear();
      })
      .catch((error) => {
        alert("deu erro no cadastro");
        console.log(error.response);
      });
  };
  
  

  return (
    <>
      <img src={back} className="back" onClick={goBack}/>
      <img src={logo} alt="logo" />
      <h1 className="Text">Cadastrar</h1>

      <TextField
        value={form.name}
        onChange={onChange}
        name="name"
        label="Nome"
        variant="outlined"
        placeholder="Nome e Sobrenome"
        className="Input_nolocus"
        required
      />
      
      
      <TextField
        value={form.email}
        onChange={onChange}
        label="Email"
        variant="outlined"
        placeholder="email@email.com"
        className="Input_nolocus"
        required
        error={CheckEmail()}
        name="email"
      />
      <TextField
        value={form.cpf}
        onChange={onChange}
        name="cpf"
        label="CPF"
        variant="outlined"
        placeholder="000.000.000-0"
        className="Input_nolocus"
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        required
      />

      <TextField
        value={form.password}
        onChange={onChange}
        label="Senha"
        variant="outlined"
        placeholder="Mínimo 6 caracteres"
        className="Input_nolocus"
        name="password"
        type={type}
        required
      />

      <TextField
        label="Confirmar"
        variant="outlined"
        placeholder="Confirme a senha anterior"
        className="Input_nolocus"
        type={type}
      />
      
      {type==="password" ? (
            <img src={hidePassword}  onClick={showPassword}/>
        ):(
          <img src={showSenha}  onClick={showPassword}/>
        )}
      
      <button onClick={handleSignUp} className="buttonDesign">Criar</button>
    </>
  );
};

export default SignUpForm;
