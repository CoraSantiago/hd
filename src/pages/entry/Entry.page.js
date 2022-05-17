import React, { useState } from 'react';

import { Button } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from '../../components/redefinicao-senha/reset-senha.comp';

import './entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "senha":
        setPassword(value);
        break;
        
      default:
        break;  
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!email || !password) {
      return alert("Informe seus dados de login!");
    }
    //Pra chamar a API pra enviar o formulário
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if(!email) {
      return alert("Informe seu email!");
    }
    //Pra chamar a API pra enviar o formulário
    console.log(email);
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-light">
        <Button className='form-box'>
          {frmLoad === "login" && (
            <LoginForm 
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              email={email}
              pass={password}
            />
          )}
          {frmLoad === "reset" && (
            <ResetPassword 
              handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              email={email}
            />
          )}
        </Button>
    </div>
  );
};
