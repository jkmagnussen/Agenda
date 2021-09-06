import React from "react";

import './LoginSignup/loginStyles.css';



function DeleteAccount({loginPassword, setLoginPassword})
{

  const deleteAccountHandler = () =>
  {
    
  }


  return (
    <div >
      <h3>Enter password to delete account</h3>
      <input 
        type="text" className="password"
        value={loginPassword}
        placeholder="password" />
        <br />
      <button 
        className="loginBtns" onClick={deleteAccountHandler}>Enter</button>
    </div>
  ); 
}

export default DeleteAccount;
