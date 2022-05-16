import React, { useState } from 'react';

import { Button } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";

import './entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
        
      default:
        break;  
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!email || !password) {
      alert("Fill up all the form!")
    }
  };

  return (
    <div className="entry-page bg-light">
        <Button className='form-box'>
          <LoginForm 
          handleOnChange= {handleOnChange}
          email={email}
          pass={password}
          />
        </Button>
    </div>
  );
};
