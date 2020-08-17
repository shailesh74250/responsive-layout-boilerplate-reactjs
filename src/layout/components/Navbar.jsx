import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.scss';

function Navbar() {
  return (
    <>
      <div class="logo">
        <h1>Company Logo</h1>
      </div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
