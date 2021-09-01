import React, { useState } from "react";

import Login from "./Login.js";
import Signup from "./Signup.js";


function LoginSignup({setLogin, loginEmail, setLoginEmail, loginPassword, setLoginPassword}){
  
  const [loginTab, setLoginTab] = useState(true)
  const [signupTab, setSignupTab] = useState(false)


  const loginTextHandler = (e) => {
    setLoginTab(true);
    setSignupTab(false);
  };

    const signupTextHandler = (e) => {
    setSignupTab(true);
    setLoginTab(false);
  };

  const loginHandler = (e) => {
    setLogin(true);
    console.log(`${loginEmail} + ${loginPassword}`)
  };



  return (
    <div className="loginBody">
      <button onClick={loginTextHandler}
        className={`loginBtns ${loginTab === true ? "loginBtnsAlt" : ""}`}
        value={loginTab}>Login</button>
      
      <button onClick={signupTextHandler}
        className={`loginBtns ${signupTab === true ? "loginBtnsAlt" : ""}`}
        value={signupTab}>Signup</button>
      {loginTab === true && signupTab === false ?
        <Login
          setLogin={setLogin}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
        /> :
        <Signup />}


      <button onClick={loginHandler} className="loginBtns">Enter</button>
    </div>
  ); 
}

export default LoginSignup;
