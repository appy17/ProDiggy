import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <header>
      <nav className="navbar">
      <div className="navbar-logo">ProDiggy-School</div>
      <ul className="navbar-links">
        <li className='navbar-item'><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About Us</Link></li>        
        <li className="navbar-item"><Link to="/courses">Courses</Link></li>
        <li className='navbar-item'><Link to="/gallery">Gallery</Link></li>
        <li className='navbar-item'><Link to="/contact">Contact</Link></li>
        <li className='navbar-item'><Link to="/admission">Admissions</Link></li>
      </ul>
    </nav>


      {/* <nav className='navbar'>
        <ul className='navbar-list'>
          <li className='school-name'>ProDiggy-School</li>
          <li className='navbar-item'><Link to="/">Home</Link></li>
          <li className='navbar-item'><Link to="/about">About Us</Link></li>
          <li className="navbar-item">
            <button onClick={toggleDropdown} className="dropdown-button">
              Programs
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/nursary">Nursary</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/kg1">KG1</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/kg2">KG2</Link>
                </li>
              </ul>
            )}
          </li>
          <li className='navbar-item'><Link to="/gallery">Gallery</Link></li>
          <li className='navbar-item'><Link to="/contact">Contact</Link></li>
          <li className='navbar-item'><Link to="/admission">Admissions</Link></li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
