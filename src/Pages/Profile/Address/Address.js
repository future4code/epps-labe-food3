import React from "react";
import TextField from "@material-ui/core/TextField";
import logo from '../../../Assets/logo-future-eats-invert.png';
import useForm from "../../../Hooks/useForm";
import axios from "axios";
import { handleAdress } from "../../../requests/user";
import { useHistory } from "react-router-dom";

export default function Address() {
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  });
  const history = useHistory();

  const clickSubmittion = (event) => {
    event.preventDefault();
    console.log(form);
    handleAdress(form, clear, history)
  }

  return (
    <div>
      <div className="main">
        <img src={logo} />
        <h1 className="Text">Meu endereço</h1>
        
        <TextField onSubmit={handleAdress}
          name="street"
          value={form.street}
          onChange={onChange}
          label="Rua/Longadouro"
          variant="outlined"
          placeholder="Rua / Av."
          className="Input_locus"
          required
        />
        <TextField
          name="number"
          value={form.number}
          onChange={onChange}
          label="Numero"
          variant="outlined"
          placeholder="Apto. / Bloco"
          className="Input_locus"
          pattern="[.\s\w]{2,}"
          required
        />
        <TextField
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          label="Bairro"
          variant="outlined"
          placeholder="Bairro"
          className="Input_locus"
          required
        />
        <TextField
          name="city"
          value={form.city}
          onChange={onChange}
          label="Cidade"
          variant="outlined"
          placeholder="Cidade"
          className="Input_locus"
          required
        />
        <TextField
          name="state"
          value={form.state}
          onChange={onChange}
          label="Estado"
          variant="outlined"
          placeholder="Estado"
          className="Input_locus"
          required
        />

        <TextField
          name="complement"
          value={form.complement}
          onChange={onChange}
          label="Complemento"
          variant="outlined"
          placeholder="Estado"
          className="Input_locus"
          required
        />
        <button className="ButtonDesign" onClick={clickSubmittion}>Criar</button>
      </div>
    </div>
  );
}
