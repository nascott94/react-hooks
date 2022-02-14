import React, { useState } from 'react';
import './App.css';

function App() {
  //state hook
  //useState is a Hook that lets you add React state to function components.
  const [newItem, setNewItem] = useState('');
  //empty array that will hold all newitems
  const [items, setItems] = useState([]);

  //helper functions
  function addItem() {
    if (!newItem) {
      alert('plz enter something!');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem('');

    console.log(items);
  }

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
      <button onClick={() => addItem()}>Add</button>

      {/* 3. list of items (unordered list with items) */}
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
