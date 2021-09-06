import React  from "react";



function Login({setLogin, loginEmail, setLoginEmail, loginPassword, setLoginPassword})
{

      const loginEmailHandler = (e) => {
    setLoginEmail(e.target.value)
      };
  
      const loginPasswordHandler = (e) => {
setLoginPassword(e.target.value)
      };
  
    const loginHandler = (e) => {
    setLogin(true);
    console.log(`${loginEmail} + ${loginPassword}`)
  };

  return (
    <div >
      <br/>
      <input onChange={loginEmailHandler}
        type="text"
        className="userName"
        value={loginEmail}
        placeholder="email" />
      <br/>
      <input onChange={loginPasswordHandler}
        type="text" className="password"
        value={loginPassword}
        placeholder="password" />
        <br />
      <button onClick={loginHandler}
        className="loginBtns">Enter</button>
    </div>
  ); 
}

export default Login;
