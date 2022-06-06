import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDoLists';
function App() {
  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
  const itemEvent=(e)=>{
    setInputList(e.target.value);

  };

  const listofItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })
  };
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      })
    })
  };
  // setInputList('');

  return (
    <div className="main_div">
      <div className='center_div'>
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input type='text' placeholder="Add a items" value={inputList} onChange={itemEvent} />
        <button onClick={listofItems}>+</button>
        <ol>
            
            {Items.map((itemval,index)=>{
              return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />;
            })}
          
        </ol>
      </div>
    </div>
  );
}

export default App;
