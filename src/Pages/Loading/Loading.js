import React, { useEffect, useState } from "react";
import {goToLogin} from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom";
import style from './Style.css';
import logo from "../../Assets/logo-future-eats@3x.png";
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'


const LogoFutureEats = styled.img`
  width: 126px;
  height: 65px;
  
`

const LoadingContainer = styled.div`
  /* width: 100%; */
`

const CentralDiv = styled.div`
background-color: black;
width: 600px;
height: 600px;
display: flex;
align-items: center;
justify-content: center;


`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`

const Loading = () => {
    const history = useHistory();
    
 useEffect(() => {
     const timer = setTimeout(() => {          
       goToLogin(history)
     }, 5000);
     return () => clearTimeout(timer);
   }, []);
      
      return(
        <MainDiv>
          <CentralDiv>
            <LogoFutureEats src={logo}/>
            <LoadingContainer>
              <CircularProgress color="secondary" />
            </LoadingContainer>
          </CentralDiv>
        </MainDiv>
        
      )
}

export default Loading;