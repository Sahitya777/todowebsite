import './App.css';
import React from 'react';
function App() {
  return (
    <div className="main_dev">
      <div className='center_div'>
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input type='text' placeholder="Add a items" />
        <button>+</button>
        <ol>
          <li>
            buy apple
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
