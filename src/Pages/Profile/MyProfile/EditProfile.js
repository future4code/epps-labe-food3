import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../../Hooks/useForm";
import back from "../../../Assets/back.png";
import { useHistory } from "react-router-dom";

const EditProfile = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" });

  const handleSubmission = (event) => {
    event.preventDefault();
    // updateProfile(form)
    // props.setPage(false)
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <img src={back} onClick={goBack} />

      <h1 className="title">Editar</h1>

      <TextFieldStyled
        onSubmit={handleSubmission}
        name="name"
        value={form.name}
        onChange={onChange}
        variant="outlined"
        label="Nome"
        className="Input_locus"
        required
      />
      <TextFieldStyled
        name="email"
        value={form.email}
        onChange={onChange}
        variant="outlined"
        label="E-mail"
        className="Input_locus"
        required
      />
      <TextFieldStyled
        name="cpf"
        value={form.cpf}
        onChange={onChange}
        variant="outlined"
        label="CPF"
        placeholder="Somente números"
        className="Input_locus"
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        required
      />
      <button className="Rectangle">SALVAR</button>
    </>
  );
};

export default EditProfile;
