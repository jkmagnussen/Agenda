import React  from "react";



function Login({setLogin, loginEmail, setLoginEmail, loginPassword, setLoginPassword})
{

      const loginEmailHandler = (e) => {
    setLoginEmail(e.target.value)
      };
  
      const loginPasswordHandler = (e) => {
setLoginPassword(e.target.value)
  };

  return (
    <div >
      <br/>
      <input onChange={loginEmailHandler} type="text" className="userName" value={loginEmail} />
      <br/>
      <input onChange={loginPasswordHandler} type="text" className="password" value={loginPassword} />
        <br />
    </div>
  ); 
}

export default Login;
