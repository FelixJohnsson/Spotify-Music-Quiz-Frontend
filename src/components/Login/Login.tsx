import React from "react";
import "./loginScreen.css";
import LoginButton from "./LoginForm"

const login = () => {
  window.location.href ="http://localhost:5000/login";
}

const LoginScreen: React.FC = () => {
    return (
      <div className="LoginScreen" style={{ backgroundColor: "#24292e" }}>
          <LoginButton onClick={login}/>
      </div>
    );
  };

export default LoginScreen;