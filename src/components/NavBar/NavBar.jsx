import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <div className="navbar-top">
          <img src= "images/BioMembHub_logo2.jpg" alt="BioMembHub" className='navbar-logo' />
        </div>
        <div className="nav-container">
          <NavLink to="/" className="nav-button" activeClassName="active">HOME</NavLink>
          <NavLink to="/about" className="nav-button" activeClassName="active">ABOUT</NavLink>
          <NavLink to="/help" className="nav-button" activeClassName="active">HELP</NavLink>
          <NavLink to="/databases" className="nav-button" activeClassName="active">DATABASES</NavLink>
          <NavLink to="/webservers" className="nav-button" activeClassName="active">WEB SERVERS</NavLink>
          <NavLink to="/download" className="nav-button" activeClassName="active"> DOWNLOAD </NavLink>
        </div>
      </div>
      );
}

export default NavBar;