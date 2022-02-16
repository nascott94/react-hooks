import React, { useState } from 'react';
import './App.css';

function App() {
  //state hook
  //useState is a Hook that lets you add React state to function components
  //state: local data storage that is only local to the component
  const [newItem, setNewItem] = useState('');
  //empty array that will hold all newitems
  const [items, setItems] = useState([]);

  const [updatedText, setUpdatedText] = useState('');
  const [showEdit, setShowEdit] = useState(-1);

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
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  //EDITS item text once its created
  //gets the current item
  function editItem(id, newText) {
    const currentItem = items.filter((item) => item.id === id);
    //this one creates a new item with the same id, yay
    const newItem = {
      id: currentItem.id,
      value: newText,
    };
    deleteItem(id);

    //REPLACE item in the list of items
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText('');
    setShowEdit(-1);
  }

  return (
    <div className="App">
      {/* 1. HEADER  */}

      <h1>To Do List</h1>

      {/* 2. INPUT  */}
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      {/* ADD ITEM BUTTON */}
      <button onClick={() => addItem()}>Add</button>

      {/* 3. LIST OF ITEMS (unordered list with items) */}
      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </li>

              {showEdit == item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
