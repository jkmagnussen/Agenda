import React, { useState, useEffect }  from "react";

import './loginStyles.css';

import validator from 'validator'

function Signup({ signuptName, setSignuptName, signupEmail, setSignupEmail,
  signupPassword, setSignupPassword, setLogin, signupPasswordConfirm,
  setSignupPasswordConfirm })
{
  const [emailError, setEmailError] = useState('')
  
  const signupNameHandler = (e) => setSignuptName(e.target.value);
  
    const signupEmailHandler = (e) => {

      if (validator.isEmail(e.target.value)) {
        setEmailError('Valid Email :)')
    } else {
        setEmailError('Enter valid Email!')
        setSignupEmail(emailError)
        
      }
      setSignupEmail(e.target.value)
    }
  
      var emailColors = "userName"
  if (signupEmail === "") emailColors = "userName"
  else if (signupEmail !== "" && emailError === "Valid Email :)") emailColors = "userNameGreen"
  else if(signupEmail !== "" && emailError === "Enter valid Email!") emailColors = "userNameRed"
  
  const signuppasswordHandler = (e) => setSignupPassword(e.target.value);
  
    const confirmPasswordHandler = (e) => {
    setSignupPasswordConfirm(e.target.value)
      };

  const signupHandler = (e) =>{
    if (signupPassword && signupPasswordConfirm != ""
      && signupPassword === signupPasswordConfirm
      && setEmailError === "Valid Email"){
      setLogin(true);
    }

  };

    let colors = "userName";
    if (signupPassword === "") colors = "userName";
    else if (signupPasswordConfirm === signupPassword) colors = "userNameGreen";
    else if (signupPasswordConfirm !== signupPassword) colors = "userNameRed";

  


  return (
    <div >
      <br/>
      <input onChange={signupNameHandler}
        type="text"
        className={ `userName ${signuptName.length > 0 ? "userNameGreen" : "userNameRed"}`}
        value={signuptName}
      placeholder="name"/>
      <br/>
      <input onChange={signupEmailHandler} type="text"
        className="userName"
        className={emailColors}
        value={signupEmail}
        placeholder="email" />
      <br />
      <input onChange={signuppasswordHandler} type="text"
        className={colors} 
        value={signupPassword}
        placeholder="create password" />
      <br/>
      <input onChange={confirmPasswordHandler} type="text"
        className={colors}
        value={signupPasswordConfirm}
        placeholder="confirm password"/>
      <br />
      <button onClick={signupHandler}className="loginBtns">Enter</button>
    </div>
  ); 
}

export default Signup;


