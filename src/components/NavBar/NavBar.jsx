import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Links } from '../../Urls.jsx';

const NavBar = () => {
    return (
      <div>
          <div className="image-container">
          <img src= "images/BioMembHub_logo2.jpg" alt="BioMembHub" className='navbar-logo' />
            <a href={Links.Lomize_Group} className='overlay1'>Lomize Group </a>
            <a href={Links.Im_Lab} className='overlay2'>Wonpil Im Group</a>
          </div>
        <div className="nav-container">
          <NavLink to="/" className="nav-button" activeClassName="active">HOME</NavLink>
          <NavLink to="/about" className="nav-button" activeClassName="active">ABOUT</NavLink>
          <NavLink to="/databases" className="nav-button" activeClassName="active">DATABASES</NavLink>
          <NavLink to="/webservers" className="nav-button" activeClassName="active">WEB SERVERS</NavLink>
          <NavLink to="/help" className="nav-button" activeClassName="active">HELP</NavLink>
        </div>
      </div>
      );
}

export default NavBar;