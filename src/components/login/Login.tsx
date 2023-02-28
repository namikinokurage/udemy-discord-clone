import { Button } from "@mui/material";
import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./logo192.png" alt="" />
      </div>

      <Button>ログイン</Button>
    </div>
  );
}

export default Login;
