import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import './streamlist.css';

function StreamList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  // Load from localStorage on initial render
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('streamList'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('streamList', JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setItems([...items, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const handleComplete = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    const editedText = prompt('Edit the item:');
    if (editedText !== null && editedText.trim() !== '') {
      setItems(items.map(item =>
        item.id === id ? { ...item, text: editedText } : item
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
          placeholder="Enter something to log"
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



