import React, { useEffect, useState } from "react";
import style from "./Style.css";
import TextField from "@material-ui/core/TextField";
import { Check } from "@material-ui/icons";
import useForm from "../../Hooks/useForm";
import logo from "../../Assets/logo-future-eats-invert.png";
import axios from "axios";

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [type, settype] = useState("password");

  // console.log(form)

  const handleMessage = () => {
    if (score > 0 && score <= 3) {
      setMessage("Senha fraca");
    } else if (score >= 4 && score <= 6) {
      setMessage("Senha média");
    } else if (score > 6) {
      setMessage("Senha forte");
    }
  };

  useEffect(() => {
    handleMessage();
  });

  useEffect(() => {
    let newScore = 0;

    if (form.password.length > 5) {
      newScore = newScore + 1;
    }

    if (form.password.length > 10) {
      newScore += 2;
    }

    if (/[A-Z]/.test(form.password)) {
      newScore += 1;
    }

    if (/\d/.test(form.password)) {
      newScore += 1;
    }

    if (
      form.password.includes("!") ||
      form.password.includes("@") ||
      form.password.includes("#")
    ) {
      newScore += 2;
    }

    setScore(newScore);
  }, [form.password]);

  const CheckEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return !re.test(String(form.email).toLowerCase());
  };

  const CheckPassword = () => {
    if (type === "form.password") {
      settype("text");
    } else {
      settype("form.password");
    }
  };

  const Confirm = () => {
    if (form.password.length <= 6) {
      //se a senha for menor que 6 digitos, mensagem de senha fraca aparece.
      alert("senha fraca!");
    } else {
      alert("cadastrado com sucesso! :)");
    }
  };

  const handleSignUp = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup",
        form
      )
      .then((res) => {
        alert("ok");
        console.log(res.data);
        clear();
      })
      .catch((error) => {
        alert("deu erro no cadastro");
        console.log(error.response);
      });
  };

  return (
    <div className="main">
      <img src={logo} alt="logo" />
      <h1 className="Text">Cadastrar</h1>

      <TextField
        id="outlined-basic"
        value={form.name}
        onChange={onChange}
        name="name"
        label="Nome"
        variant="outlined"
        placeholder="Nome e Sobrenome"
        className="Input_nolocus"
        required
      />
      <TextField
        value={form.email}
        onChange={onChange}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="email@email.com"
        className="Input_nolocus"
        required
        error={CheckEmail()}
        // helperText={CheckEmail()?'Digite um e-mail valido':""}
        name="email"
      />
      <TextField
        id="outlined-basic"
        value={form.cpf}
        onChange={onChange}
        name="cpf"
        label="CPF"
        variant="outlined"
        placeholder="000.000.000-0"
        className="Input_nolocus"
        required
      />

      <TextField
        value={form.password}
        onChange={onChange}
        id="outlined-basic"
        label="Senha"
        variant="outlined"
        placeholder="Mínimo 6 caracteres"
        className="Input_nolocus"
        name="password"
        required
      />
      <p>{message}</p>
      <progress value={score} min={0} max={7} />
      <TextField
        id="outlined-basic"
        label="Confirmar"
        variant="outlined"
        placeholder="Confirme a senha anterior"
        className="Input_nolocus"
      />
      <button className="Rectangle" onClick={handleSignUp}>
        Criar
      </button>
    </div>
  );
};

export default SignUpForm;
