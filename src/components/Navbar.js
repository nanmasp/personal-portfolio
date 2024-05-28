import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Nanma Pillai</h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education-skills">Education & Skills</a></li>
          <li><a href="#experience-projects">Experience & Projects</a></li>
          <li><a href="#extracurriculars">Extracurriculars</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

