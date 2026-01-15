/* -------------------------------------
PASOS PARA CREAR UNA APP REACT
1: DB2
2: UI buttons
3: CSS
4: Funcionalidad: onClick, onChange 
-------------------------------------*/

// el array[] "todos" contiene objs{} y cada uno es un item
// el array[] funciona con index.
// FORMATO: lista.map(item, index)
// WARNING: "handleListInputChange" -- De no declararse f(x) bota ERROR<input>

import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // DB2 CREADO-------------------------------
  const [todos, setTodos] = useState([]);               //array[]  /  Memoria ROM
  const [headingInput, setHeadingInput] = useState(""); //onChange()
  const [listInputs, setListInputs] = useState({});     // obj{}  / onChange()
  // ------------------------------------------

  // FUNCIONALIDAD DE AGREGAR ITEMS 
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);//Botón "add item as obj{}"
      setHeadingInput("");//reset <input>
    };
  };

  //FUNCIONALIDAD DE AGREGAR LISTAS
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos];  //var volátil
      newTodos[index].lists.push(listInputs[index]);  //Concatena values en array[] "lists"
      setTodos(newTodos); // save changes
      setListInputs({ ...listInputs, [index]: "" });  //reset <input>
    };
  };

  const handleListInputChange = (index, value) => { //WARNING: De no declararse bota ERROR<input>
    setListInputs({ ...listInputs, [index]: value });
  }

  //FUNCIONALIDAD DE ELIMINAR ITEMS
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos]; //var temporal
    newTodos.splice(index,1); //elimina el item
    setTodos(newTodos);
  }

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
          // FORMATO: lista.map( (item, index) => )
          todos.map((todo, index) => (//extrae items de la DB2 //var "todo" es volátil
            <div key={index} className="todo-card">
              <div className="heading_todo">
                <h3>{todo.heading}</h3>
                <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading</button>{/* ERROR funcion no definida --------------------------- */}
              </div>

              {/* ----------- LIST ----------- */}
              <ul>
                {
                  todo.lists.map((list, listIndex) => (  //var "list" es temporal
                    <li key={listIndex} className="todo_inside_list">
                      <p>{list}</p>
                    </li>
                  ))
                }
              </ul>

              <div className="EDITED_heading_todo">
                <input type="text" className="list-input" placeholder="Agregar Lista" value={listInputs[index] || ""} onChange={(e) => handleListInputChange(index, e.target.value)} />{/* WARNING(2): OR||  /  funcion no definida ---------------------------*/}
                <button className="add-list-button" onClick={() => handleAddList(index)}>Agregar Lista</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default TodoList;