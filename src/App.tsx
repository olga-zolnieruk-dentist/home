import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {About,Careers,Home,} from "./routes";
import {Navbar} from './Navbar';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>React GitHub Pages Example</h1>
        <p>A demonstration of deploying React apps to GitHub Pages</p>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
