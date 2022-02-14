import React, { useState } from 'react';
import './App.css';

function App() {
  //state hook
  //useState is a Hook that lets you add React state to function components.
  const [newItem, setNewItem] = useState('');

  return (
    <div className="App">
      {/* 1. header  */}

      <h1>To Do List</h1>

      {/* 2. input  */}
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>Add</button>

      {/* 3. list of items (unordered list with items) */}
    </div>
  );
}

export default App;
