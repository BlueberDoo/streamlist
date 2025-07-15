import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import './streamlist.css';

function StreamList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setItems([...items, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleComplete = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleEdit = (id) => {
    const newText = prompt('Edit your item:');
    if (newText) {
      setItems(items.map(item =>
        item.id === id ? { ...item, text: newText } : item
      ));
    }
  };

  return (
    <div className="page">
      <h2>StreamList Home</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            {item.text}
            <button onClick={() => handleComplete(item.id)}><FaCheck /></button>
            <button onClick={() => handleEdit(item.id)}><FaEdit /></button>
            <button onClick={() => handleDelete(item.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;


