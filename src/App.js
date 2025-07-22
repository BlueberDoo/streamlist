import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StreamList from './streamlist';
import MovieSearch from './components/moviesearch';
import Cart from './cart';
import About from './about';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>StreamList App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<MovieSearch />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



