import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../../Hooks/useForm";
import back from '../../../Assets/back.png';
import { useHistory } from "react-router-dom";
import style from '../../../styles/components/Profile.module.css';
import { updateAdress } from "../../../requests/user";


const EditAddres = () =>{
    const history = useHistory();
    const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});
    
    
    const goBack = () =>{
        history.goBack()
    }
    
    const clickSubmittion = (event) => {
        event.preventDefault();
        console.log(form);
        updateAdress(form, clear, history)
      }

    return(
    <>
        <img src={back} onClick={goBack}/>
        <h1 className={style.title}>Endereço</h1>
        
        <TextFieldStyled onSubmit={clickSubmittion}
            value={form.street}
            name="street"
            onChange={onChange}
            label="Logadouro"
            variant="outlined"
            className={style.Input_nolocus}
            required
        />
        <TextFieldStyled
            value={form.number}
            name="number"
            onChange={onChange}
            label="Número"
            variant="outlined"
            className={style.Input_nolocus}
            pattern="[.\s\w]{2,}"
            required
        />
        
        <TextFieldStyled
            value={form.complement}
            name="complement"
            onChange={onChange}
            label="Complemento"
            variant="outlined"
            className={style.Input_nolocus}
            required
        />
        
        <TextFieldStyled
            value={form.neighbourhood}
            name="neighbourhood"
            onChange={onChange}
            label="Bairro"
            variant="outlined"
            className={style.Input_nolocus}
            required
        />
        <TextFieldStyled
            value={form.city}
            name="city"
            onChange={onChange}
            label="Cidade"
            variant="outlined"
            className={style.Input_nolocus}
            required
        />
        <TextFieldStyled
            value={form.state}
            name="state"
            onChange={onChange}
            label="Estado"
            variant="outlined"
            className={style.Input_nolocus}
            required
        />
       
        
       <button className={style.buttonDesign} onClick={clickSubmittion}>SALVAR</button>
    </>    
    )
}

export default EditAddres;