import React, { useEffect } from "react";
import { goToLogin } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import logo from "../../Assets/logo-future-eats@3x.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../../styles/components/LoadingPage.module.css";

const Loading = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      goToLogin(history);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.ImageContainer}>
        <img src={logo} className={styles.ImageDesign} />
        <div className={styles.ProgressDesign}>
          <CircularProgress color="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Loading;