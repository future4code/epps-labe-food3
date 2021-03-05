import React, { useEffect, useState } from "react";
import {goToSignUp} from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";


const Login = () => {
    const history = useHistory();

  return (
    <div>
        <LoginForm/>
    </div>
  );
};

export default Login;