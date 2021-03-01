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
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    const [type, settype] = useState("password");
  
    console.log(form)
    
    
    const handleMessage = () => {
      if (score > 0 && score <= 3) {
        setMessage('Senha fraca')
      } else if (score >= 4 && score <= 6) {
        setMessage('Senha média')
      } else if (score > 6) {
        setMessage('Senha forte')
      }
    }
  
    useEffect(() => {
      handleMessage()
    })
  
    useEffect(() => {
      let newScore = 0
  
      if (form.password.length > 5) {
        newScore = newScore + 1
      }
  
      if (form.password.length > 10) {
        newScore += 2
      }
  
      if (/[A-Z]/.test(form.password)) {
        newScore += 1
      }
  
      if (/\d/.test(form.password)) {
        newScore += 1
      }
  
      if (
        form.password.includes("!") ||
        form.password.includes("@") ||
        form.password.includes("#")
      ) {
        newScore += 2
      }
  
      setScore(newScore)
    }, [form.password])
    
    const CheckEmail = () =>{
      const re=/\S+@\S+\.\S+/
      return(
          !re.test(String(form.email).toLowerCase())
      )
    }

  const CheckPassword = () =>{
      if(type==="form.password"){
          settype("text")
      }else{
          settype("form.password")
      }
  }
    
  const Confirm = () =>{
    if(form.password.length<=6){ //se a senha for menor que 6 digitos, mensagem de senha fraca aparece.
        alert('senha fraca!')
    }else{
        alert('cadastrado com sucesso! :)')
    }
  }
    

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
        error={CheckEmail()}
        helperText={CheckEmail()?'Digite um email valido!':''}
      />
      {/* <TextField
        name="password"
        value={form.password}
        onChange={onChange}
        id="outlined-basic"
        label="Minimo 6 caracteres"
        variant="outlined"
        className="Input_nolocus"
        required
      /> */}
      <p>{message}</p>
        <progress value={score} min={0} max={7} />
      <button className="Rectangle">Entrar</button>
      <p>Nao possui cadastro? <Link onClick={()=>goToSignUp(history)}>clique aqui</Link></p>
      
    </div>
  );
};

export default Login;
