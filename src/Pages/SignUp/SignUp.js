import React, { useEffect, useState } from "react";
import style from "./Style.css";
import TextField from "@material-ui/core/TextField";
import { Check } from "@material-ui/icons";
import useForm from "../../Hooks/useForm";
import logo from "../../Assets/logo-future-eats-invert.png"
import SignUpForm from "./SignUpForm";


const SignUp = () => {


  return (
    <div className="main">
      <SignUpForm/>
    </div>

  )    
}

export default SignUp;
