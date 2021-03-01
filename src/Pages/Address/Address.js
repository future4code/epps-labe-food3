import React from 'react'
import TextField from "@material-ui/core/TextField";


export default function Address() {
  return (
    <div>
        <div className="main">
        <h1 className="Text">Meu endereço</h1>
        <TextField
          id="outlined-basic"
          label="Logradouro"
          variant="outlined"
          placeholder="Rua / Av."
          className="Input_nolocus"
        />
        <TextField
          id="outlined-basic"
          label="Complemento"
          variant="outlined"
          placeholder="Apto. / Bloco"
          className="Input_nolocus"
        />
        <TextField
          id="outlined-basic"
          label="Bairro"
          variant="outlined"
          placeholder="Bairro"
          className="Input_nolocus"
        />
        <TextField
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          placeholder="Cidade"
          className="Input_nolocus"
        />
        <TextField
          id="outlined-basic"
          label="Estado"
          variant="outlined"
          placeholder="Estado"
          className="Input_nolocus"
        />
        <button className="Rectangle">Criar</button>
      </div>
    </div>
  )
}
