import React, { useState } from "react";
import './loginStyles.css';

import Login from "./Login.js";
import Signup from "./Signup.js";


function LoginSignup({ setLogin, loginEmail, setLoginEmail,
  loginPassword, setLoginPassword, signuptName, setSignuptName, signupEmail,
  setSignupEmail, signupPassword, setSignupPassword, signupPasswordConfirm,
setSignupPasswordConfirm})
{
  
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
        <Signup
          setLogin={setLogin}
          signuptName={signuptName}
          setSignuptName={setSignuptName}
          signupEmail={signupEmail}
          setSignupEmail={setSignupEmail}
          signupPassword={signupPassword}
          setSignupPassword={setSignupPassword}
          signupPasswordConfirm={signupPasswordConfirm}
          setSignupPasswordConfirm = {setSignupPasswordConfirm}
        />}
    </div>
  ); 
}

export default LoginSignup;
