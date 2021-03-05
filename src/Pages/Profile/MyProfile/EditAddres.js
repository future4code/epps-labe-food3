import React, { useEffect, useState } from "react";
import TextFieldStyled from "@material-ui/core/TextField";
import useForm from "../../../Hooks/useForm";
import back from '../../../Assets/back.png';
import { useHistory } from "react-router-dom";
import styles from '../../../styles/components/Profile.module.css';

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
    <div className={styles.MainDiv}>
        <img src={back} onClick={goBack} className={styles.back}/>
        
        <h1 className={styles.title}>Endereço</h1>
        
        <TextFieldStyled onSubmit={handleSubmission}
            value={form.street}
            name="street"
            onChange={onChange}
            label="Logadouro"
            variant="outlined"
            className={styles.Input_locus}
            required
        />
        <TextFieldStyled
            value={form.number}
            name="number"
            onChange={onChange}
            label="Número"
            variant="outlined"
            className={styles.Input_locus}
            pattern="[.\s\w]{2,}"
            required
        />
        
        <TextFieldStyled
            value={form.complement}
            name="complement"
            onChange={onChange}
            label="Complemento"
            variant="outlined"
            className={styles.Input_locus}
            required
        />
        
        <TextFieldStyled
            value={form.neighbourhood}
            name="neighbourhood"
            onChange={onChange}
            label="Bairro"
            variant="outlined"
            className={styles.Input_locus}
            required
        />
        <TextFieldStyled
            value={form.city}
            name="city"
            onChange={onChange}
            label="Cidade"
            variant="outlined"
            className={styles.Input_locus}
            required
        />
        <TextFieldStyled
            value={form.state}
            name="state"
            onChange={onChange}
            label="Estado"
            variant="outlined"
            className={styles.Input_locus}
            required
        />
       
        
        <button className={styles.ButtonDesign}>Salvar</button>
    </div>    
    )
}

export default EditAddres;