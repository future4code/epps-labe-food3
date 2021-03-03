import React, { useEffect, useState } from "react";
import style from "./Style.css";
import axios from "axios";
import { goToFeed, goToProfile } from "../../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import caneta from "../../../Assets/edit@2x.png";
import { getProfile } from "../../../requests/user";
import EditProfile from "./EditProfile";
import EditAddres from '../MyProfile/EditAddres';

const MyProfile = () => {
  const history = useHistory();
  const [profile, setprofile] = useState({});
  const [isActive, setisActive] = useState(false);
  const [editadress, setEditadress] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const headers = {
      headers: {
        Auth: localStorage.getItem("token"),
      },
    };

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile",
        headers
      )
      .then((res) => {
        setprofile(res.data.user);
        alert("carregado com sucesso");
        // console.log(res.data)
        console.log("PROFILE AQUII", profile);
        console.log(profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const activeEdit = () => {
    setisActive(true);
  }
  
  const editAdress = () => {
    setEditadress(true);
  }


  return (
    <div>
      {isActive ? (
        <div>
          <EditProfile />
        </div>
      ) : (
        <div>
          <div className="text">
          <h1 className="title">Meu perfil</h1>
            <img src={caneta} className="Edit" onClick={activeEdit} />
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
          </div>

          <div className="Rectangle1">
            <p>Endereço cadastrado </p>
            <img src={caneta} className="Edit" onClick={editAdress} />
            <p>{profile.address}</p>
          </div>

          <div className="">
            <p>Histórico de pedidos</p>
          </div>

          <div className="Rectangle">
            <p>Burguer Vila Madalena</p>
            <p>30 de Setembro de 2019</p>
            <h3>
              <strong>SUBTOTAL</strong> R$89,00
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
