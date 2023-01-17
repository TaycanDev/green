import React from "react";
import { signInWithGoogle } from "../config/config";
import "./login.scss";
import Google from "../../images/Google.png";

const Login = () => {
  return (
    <>
      <div className="login_bg"></div>
      <div className="card_register">
        <img src={Google} alt="logo_google" />
        <h3>Регистрация в Google</h3>
        <button onClick={signInWithGoogle}>Register</button>
      </div>
    </>
  );
};

export default Login;
