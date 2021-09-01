import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Footer from "./components/Footer";

function App(){
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [loggedIn, setLogin] = useState(false)

  const [loginEmail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");



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
          <button  className="deleteAccount">Delete Account</button>
        </div>: null}
        
<Footer/>
    </div>
  ); 
}

export default App;
