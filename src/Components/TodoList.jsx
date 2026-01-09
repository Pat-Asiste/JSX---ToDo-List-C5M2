import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // DB2 CREADO-------------------------------
  const [todos, setTodos] = useState([]);//Memoria ROM
  const [headingInput, setHeadingInput] = useState("");//Memoria enTiempoReal
  const [listInputs, setListInputs] = useState({});
  // ------------------------------------------

  // FUNCIONALIDAD DE AGREGAR ITEMS 
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);//Botón "add item as obj{}"
      setHeadingInput("");//reset <input>
    }
  };

  // UI ---------------------------------------
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => { setHeadingInput(e.target.value); }}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>

      {/* ----------- DISPLAY ITEMS in UI -----------*/}
      <div className="todo_main">
        {
        todos.map((todo, index) => (//extrae items de la DB2 //var "todo" es volátil
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
            </div>
          </div>
        ))
        }
      </div>
    </>
  );
};

export default TodoList;