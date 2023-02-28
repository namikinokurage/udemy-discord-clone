import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.scss";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((e) => {
      alert(e);
    });
  };
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./logo192.png" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
}

export default Login;
