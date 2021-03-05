import React, { useEffect, useState } from "react";
import axios from "axios";
import { goToEditProfile, goToEditAddress } from "../../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import caneta from "../../../Assets/edit@2x.png";
import { getProfile } from "../../../requests/user";
import Footer from "../../../components/Footer/Footer";
import styles from '../../../styles/components/Profile.module.css';

const MyProfile = () => {
  const history = useHistory();
  const [profile, setProfile] = useState({});


  useEffect(() => {
    getProfile(setProfile);
  }, []);

 
  return (
    <div className={styles.Main}>
          <div>
          <h1 className={styles.title}>Meu perfil</h1>
            <img src={caneta} className={styles.Edit} onClick={() => goToEditProfile(history)} />
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
          </div>

          <div className={styles.endCadastrado}>
            <p>Endereço cadastrado </p>
            <img src={caneta} className={styles.Edit} onClick={() => goToEditAddress(history)} />
            <p>{profile.address}</p>
          </div>

          <div>
            <p>Histórico de pedidos</p>
          </div>

          <div className={styles.historico}>
            <p>Burguer Vila Madalena</p>
            <p>30 de Setembro de 2019</p>
            <h3>
              <strong>SUBTOTAL</strong> R$89,00
            </h3>
          </div>
          <Footer/>
        </div>
  )
}

export default MyProfile;
