import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Footer from "./components/Footer";
import DeleteForm from "./components/deleteForm";

function App(){
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [loggedIn, setLogin] = useState(false)

  const [loginEmail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");

  const [signuptName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");

  const [deleteAccountToggle, setDeleteAccountToggle] = useState(false);

  useEffect(() => {
    
      const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }
    filterHandler()
  }, [todos, status]);


  const deleteAccount = () =>
  {
    setDeleteAccountToggle(true)
  }

  const logoutHandler = () =>{
    setLogin(false)
  }

  return (

    <div className="App">
      <header>
        <h1>AGENDA</h1>
        
      </header>
      
      {loggedIn === false ?
        <LoginSignup
          setLogin={setLogin}
          loggedIn={loggedIn}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginpassword={loginpassword}
          setLoginPassword={setLoginPassword}
          signuptName={signuptName}
          setSignuptName={setSignupName}
          signupEmail={signupEmail}
          setSignupEmail={setSignupEmail}
          signupPassword={signupPassword}
          setSignupPassword={setSignupPassword}
          signupPasswordConfirm={signupPasswordConfirm}
          setSignupPasswordConfirm={setSignupPasswordConfirm}


        /> :
        <div>
                        <Form
        setStatus={setStatus}
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        />
      
      <TodoList todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        filteredTodos={filteredTodos}/>
        </div>

      }
      {loggedIn === true ?
        <div>
          <button onClick={logoutHandler} className="logoutBtn">Logout</button>
          <button className="deleteAccount"
          onClick={deleteAccount}>Delete Account</button>
        </div> : null}
      {deleteAccountToggle === true ?
        <DeleteForm
          loginpassword={loginpassword}
          setLoginPassword={setLoginPassword}
      /> : null}
        
<Footer/>
    </div>
  ); 
}

export default App;
