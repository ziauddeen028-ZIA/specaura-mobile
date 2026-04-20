import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import Navigation from './Navigation';
import HeroPage from './HeroPage';
import Home from './Home';
import Main from './Main';
import Check from './Check';
import About from './About';
import Contact from './Contact';




function App() {
  return (
  
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="home" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="check" element={<Check />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />


      </Routes>
    </BrowserRouter>

  
  );
}

export default App;
