import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../../Hooks/useForm";
import back from '../../../Assets/back.png';
import { useHistory } from "react-router-dom";

const EditAddres = () =>{
    const history = useHistory();
    const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});
    
    const handleSubmission = (event) => {  
        event.preventDefault()  
        // updateProfile(form)     
        // props.setPage(false)  
      }
    
    const goBack = () =>{
        history.goBack()
    }

    return(
    <>
        <img src={back} onClick={goBack}/>
        <h1 className="title">Endereço</h1>
        <TextFieldStyled onSubmit={handleSubmission}
            value={form.street}
            name="street"
            onChange={onChange}
            label="Logadouro"
            variant="outlined"
            className="Input_locus"
            required
        />
        <TextFieldStyled
            value={form.number}
            name="number"
            onChange={onChange}
            label="Número"
            variant="outlined"
            className="Input_locus"
            pattern="[.\s\w]{2,}"
            required
        />
        
        <TextFieldStyled
            value={form.complement}
            name="complement"
            onChange={onChange}
            label="Complemento"
            variant="outlined"
            className="Input_locus "
            required
        />
        
        <TextFieldStyled
            value={form.neighbourhood}
            name="neighbourhood"
            onChange={onChange}
            label="Bairro"
            variant="outlined"
            className="Input_locus"
            required
        />
        <TextFieldStyled
            value={form.city}
            name="city"
            onChange={onChange}
            label="Cidade"
            variant="outlined"
            className="Input_locus"
            required
        />
        <TextFieldStyled
            value={form.state}
            name="state"
            onChange={onChange}
            label="Estado"
            variant="outlined"
            className="Input_locus"
            required
        />
       
        
        <button className="Rectangle">Salvar</button>
    </>    
    )
}

export default EditAddres;