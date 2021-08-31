import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App(){
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);



  useEffect(() =>{
    filterHandler()
  }, [todos, status]);


  const filterHandler = () =>
  {
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



  return (

    <div className="App">
      <header>
        <h1>AGENDA</h1>
        
      </header>
            <h3 style={{textAlign:"center", fontSize: "4vh"}}>hello username</h3>

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
  ); 
}

export default App;
