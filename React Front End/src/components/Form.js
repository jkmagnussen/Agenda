import React from "react";

import todoPic from "../Media/todo.jpg";


function Form({setInputText, todos, setTodos, inputText, setStatus, filteredTodos})
{
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value); 
  };

  const submitTodoHandler = (e) =>
  {

    if (inputText === "")
    {
      e.preventDefault()
      setInputText("Anything to add?")
    } else {
          e.preventDefault()
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
    }
  }

  const statusHandler = (e) =>
  {
    setStatus(e.target.value)
  }

  return (
    <div>
      <h2 style={{textAlign: "center"}}>hello username</h2>
    <form>
      <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText}/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      </form>
      {todos === "" ? <img className="todoPlaceholder" alt="" src={todoPic}/> : ""}

    </div>
  ); 
}

export default Form;
