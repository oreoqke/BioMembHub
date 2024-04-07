// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import './App.css';

import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Help from './components/Help/Help.jsx';
import Databs from './components/Databases/Databases.jsx';
import WebServers from './components/WebServers/WebServers.jsx';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/databases" element={<Databs />} />
          <Route path="/webservers" element={<WebServers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
