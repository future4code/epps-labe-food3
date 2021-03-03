import React, { useEffect, useState } from "react";
import {goToLogin} from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom";
import style from './Style.css';
import logo from "../../Assets/logo-future-eats@3x.png";

const StartUp = () => {
    const history = useHistory();
    
    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 5 second!')
          goToLogin(history)
        }, 5000);
        return () => clearTimeout(timer);
      }, []);
      
      return(
        <div className="teste">
            <img src={logo} className="Logo_FutureEats"/>
        </div>
      )
}

export default StartUp;