import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../../Hooks/useForm";
import back from "../../../Assets/back.png";
import { useHistory } from "react-router-dom";
import style from '../../../styles/components/Profile.module.css';
import { updateProfile } from "../../../requests/user";


const EditProfile = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" });


  const goBack = () => {
    history.goBack();
  };
  
  const clickSubmittion = (event) => {
    event.preventDefault();
    console.log(form);
    updateProfile(form, clear, history)
  }
  

  return (
    <>
      <img src={back} onClick={goBack} />

      <h1 className={style.title}>Editar</h1>

      <TextFieldStyled
        onSubmit={clickSubmittion}
        name="name"
        value={form.name}
        onChange={onChange}
        variant="outlined"
        label="Nome"
        className={style.Input_nolocus}
        required
      />
      <TextFieldStyled
        name="email"
        value={form.email}
        onChange={onChange}
        variant="outlined"
        label="E-mail"
        className={style.Input_nolocus}
        required
      />
      <TextFieldStyled
        name="cpf"
        value={form.cpf}
        onChange={onChange}
        variant="outlined"
        label="CPF"
        placeholder="Somente números"
        className={style.Input_nolocus}
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        required
      />
      <button className={style.buttonDesign} onClick={clickSubmittion}>SALVAR</button>
    </>
  );
};

export default EditProfile;
