import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [items, setItems] = useState('');

  function addItem(e) {
    e.preventDefault();
    items !== ''
      ? setTodos([{ name: items, completed: false }, ...todos])
      : alert('Please enter an item');

    console.log(todos);
  }
  function toggleClass(e, x) {
    e.target.classList.toggle('complete');
    const usr = [x];
  }

  return (
    <div className="wrapper">
      {/* <button
        onClick={() =>
          setTodos([{ name: 'Buy apples', completed: false }, ...todos])
        }
      >
        Add todo
      </button> */}

      <form>
        <input
          type="text"
          onChange={(event) => setItems(event.target.value)}
          className="todo-input"
          placeholder="Add item..."
        />
        <button
          onClick={(event) => addItem(event)}
          className="todo-button"
          type="submit"
        >
          +
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className={todo.completed ? 'complete' : 'uncompleted'}>
            <button onClick={() => toggleClass(EventTarget)} className="done">
              &#10003;
            </button>
            <span>{todo.name}</span>
            <button className="delete">&#128465;</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <div className="left total">1 items remaining</div>
        <div className="right">
          <button className="delete-complete">Delete completed items</button>
        </div>
      </div>
    </div>
  );
}

export default App;
