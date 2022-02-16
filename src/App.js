import React, { useState } from 'react';
import './App.css';

function App() {
  //state hook
  //useState is a Hook that lets you add React state to function components
  //state: local data storage that is only local to the component
  const [newItem, setNewItem] = useState('');
  //empty array that will hold all newitems
  const [items, setItems] = useState([]);

  //HELPER FUNCTIONS

  //ADDS new item to the array
  function addItem() {
    //checks if the item is empty, then alerts user if empty
    if (!newItem) {
      alert('plz enter something!');
      return;
    }

    //generates random id for item
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    //adds new item to array of the items
    setItems((oldList) => [...oldList, item]);
    //resets newItem to og state
    setNewItem('');

    //checking to see if works
    console.log(items);
  }

  //DELETES item, based on the key (item)

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
