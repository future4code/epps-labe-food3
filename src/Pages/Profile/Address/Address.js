import React from "react";
import TextField from "@material-ui/core/TextField";
import logo from '../../../Assets/logo-future-eats-invert.png';
import useForm from "../../../Hooks/useForm";
import axios from "axios";

export default function Address() {
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  });

  const handleAdress = () => {
    const headers = {
      headers: {
        Auth: localStorage.getItem("token")
      }
    }

    axios.put("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address",form, headers)
      .then((res) => {
        alert("end criado com sucesso");
        console.log(res.data);
        // clear();
      })
      .catch((error) => {
        alert("end deu erro");
        console.log(error.response);
      });
  };

  return (
    <div>
      <div className="main">
        <img src={logo} />
        <h1 className="Text">Meu endereço</h1>
        <TextField
          name="street"
          value={form.street}
          onChange={onChange}
          id="outlined-basic"
          label="Rua/Longadouro"
          variant="outlined"
          placeholder="Rua / Av."
          className="Input_nolocus"
          required
        />
        <TextField
          name="number"
          value={form.number}
          onChange={onChange}
          id="outlined-basic"
          label="Numero"
          variant="outlined"
          placeholder="Apto. / Bloco"
          className="Input_nolocus"
          required
        />
        <TextField
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          id="outlined-basic"
          label="Bairro"
          variant="outlined"
          placeholder="Bairro"
          className="Input_nolocus"
          required
        />
        <TextField
          name="city"
          value={form.city}
          onChange={onChange}
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          placeholder="Cidade"
          className="Input_nolocus"
          required
        />
        <TextField
          name="state"
          value={form.state}
          onChange={onChange}
          id="outlined-basic"
          label="Estado"
          variant="outlined"
          placeholder="Estado"
          className="Input_nolocus"
          required
        />

        <TextField
          name="complement"
          value={form.complement}
          onChange={onChange}
          id="outlined-basic"
          label="Complemento"
          variant="outlined"
          placeholder="Estado"
          className="Input_nolocus"
          required
        />
        <button className="Rectangle" onClick={handleAdress}>Criar</button>
      </div>
    </div>
  );
}
