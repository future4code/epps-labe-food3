import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../../Hooks/useForm";

const EditProfile = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: ""});

    const handleSubmission = (event) => {  
        event.preventDefault()  
        // updateProfile(form)     
        // props.setPage(false)  
      }
    

  return (
    <div className="main">
      <h1 className="title">Editar</h1>
      
      <TextFieldStyled onSubmit={handleSubmission}
            value={form.name}
            onChange={onChange}
            variant="outlined"
            label="Name"
            required
        />
        <TextFieldStyled
            value={form.email}
            onChange={onChange}
            variant="outlined"
            label="E-mail"
            required
        />
        <TextFieldStyled
            value={form.cpf}
            onChange={onChange}
            variant="outlined"
            label="CPF"
            placeholder= "Somente números"
            pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
            required
        />
        <button>SALVAR</button>
    </div>
  );
};

export default EditProfile;
