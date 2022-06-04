import React, { useState } from 'react'
import {connect} from 'react-redux';
function Todos(props) {

   const [todo,setTodo]= useState("");

    const handleChange=(e)=>{
        setTodo(e.target.value);
    };
    console.log("todo text",props);

  return (
    <div className='addTodos'>
        <input type='text' onChange={(e)=>handleChange(e)} className='todo-input'/>

            <button className='add-btn'>
                Add
            </button>
    </div>
  )
}

export default Todos;