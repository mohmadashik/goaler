// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
