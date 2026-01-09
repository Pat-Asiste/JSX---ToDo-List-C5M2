import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  //DB2 CREADO-------------------------------
  const [todos, setTodos] = useState([]);//Memoria ROM
  const [headingInput, setHeadingInput] = useState("");//Memoria enTiempoReal
  const [listInputs, setListInputs] = useState({});

  //FUNCIONALIDAD DE AGREGAR ITEMS
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);//Botón "add item as obj{}"
      setHeadingInput("");//reset <input>
    }
  };


  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button">Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;