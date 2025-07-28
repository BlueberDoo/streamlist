import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  About
                </NavLink>
              </li>
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



