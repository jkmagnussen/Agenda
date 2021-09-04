import React from "react";


function Signup({ signuptName, setSignuptName, signupEmail, setSignupEmail,
  signupPassword, setSignupPassword, setLogin, signupPasswordConfirm,
  setSignupPasswordConfirm })
{
  
    const signupNameHandler = (e) => {
    setSignuptName(e.target.value)
    };
  
    const signupEmailHandler = (e) => {
    setSignupEmail(e.target.value)
  };
  
   const signuppasswordHandler = (e) => {
    setSignupPassword(e.target.value)
   };
  
    const confirmPasswordHandler = (e) => {
    setSignupPasswordConfirm(e.target.value)
      };

  const signupHandler = (e) =>{
      
    //if password matches confirnPassword then proceed with the login, else red box warning
    setLogin(true);

  };

  return (
    <div >
      <br/>
      <input onChange={signupNameHandler} type="text" className="userName" value={signuptName} />
      <br/>
      <input onChange={signupEmailHandler} type="text" className="password" value={signupEmail} />
      <br />
      <input onChange={signuppasswordHandler}type="text" className="userName" value={signupPassword} />
      <br/>
      <input onChange={confirmPasswordHandler}type="text" className="password" value={signupPasswordConfirm} />
      <br />
      <button onClick={signupHandler}className="loginBtns">Enter</button>
    </div>
  ); 
}

export default Signup;
