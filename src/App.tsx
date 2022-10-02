import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Home from './components/home';
import NavBar from './components/navbar';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
