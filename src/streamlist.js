import React, { useState } from 'react';
import './streamlist.css';

function StreamList() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User input:', input);
    setInput('');
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
    </div>
  );
}

export default StreamList;
