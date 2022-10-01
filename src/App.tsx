import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Home from './components/home';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
