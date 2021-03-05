import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import {goToSignUp} from "../../Routes/Coordinator";
import useForm from "../../Hooks/useForm";
import logo from "../../Assets/logo-future-eats-invert.png";
import showSenha from '../../Assets/senha.png';
import hidePassword from "../../Assets/senha-2.png";
import { handleLogin } from "../../requests/user";
import styles from '../../styles/components/Login.module.css';
import styled from 'styled-components';

const Link = styled.u`
  cursor: pointer;
`

const LoginForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [type, settype] = useState("password");
  

  const showPassword = () => {
    if (type === "password") {
      settype("text");
    } else {
      settype("password");
      
    }
  }
  
  const clickSubmittion = (event) => {
    event.preventDefault();
    console.log(form);
    handleLogin(form, clear, history)
  }
  

  return (
    <div className={styles.Main}>
        <div className="Logo_FutureEats_invert">
          <img src={logo} />
        </div>

        <h1 className={styles.Text}>Entrar</h1>
        <TextFieldStyled
          color="primary"
          name="email"
          value={form.email}
          onChange={onChange}
          label="e-mail"
          variant="outlined"
          placeholder="email@email.com"
          className={styles.Input_nolocus}
          required
        />
        <TextFieldStyled
          name="password"
          value={form.password}
          onChange={onChange}
          label="Senha"
          placeholder="minimo 6 caracteres"
          variant="outlined"
          className={styles.Input_nolocus}
          pattern="[.\s\w]{6,}"
          type={type}
          required
        />

        {type==="password" ? (
            <img src={hidePassword} onClick={showPassword}/>
        ):(
          <img src={showSenha} onClick={showPassword}/>
        )}
        
        <button onClick={clickSubmittion} className="ButtonDesign">ENTRAR</button>
        <p>Nao possui cadastro? <Link onClick={()=>goToSignUp(history)}>clique aqui</Link></p>

    </div>
  );
};

export default LoginForm;
