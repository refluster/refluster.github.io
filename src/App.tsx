import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
