import React from "react";
import "./loginScreen.css";
import LoginForm from "./LoginForm"

const LoginScreen: React.FC = () => {
    return (
      <div className="LoginScreen" style={{ backgroundColor: "#24292e" }}>
        <div className="LoginScreen-Container">
          <LoginForm />
        </div>
      </div>
    );
  };

const login = () => {
   window.location.href ="http://localhost:5000/login";
}

export default LoginScreen;