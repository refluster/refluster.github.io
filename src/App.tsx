import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Home from './components/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { customTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
