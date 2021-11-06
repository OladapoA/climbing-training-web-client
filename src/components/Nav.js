import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <Link to='/' className='link'>
        <h3>CL1MB</h3>
      </Link>
      <ul className='nav-links'>
        <Link to='/about' className='link'>
          <li>About</li>
        </Link>
        <Link to='/overview' className='link'>
          <li>Active Season</li>
        </Link>
        <Link to='/exercises' className='link'>
          <li>Exercises</li>
        </Link>
        <Link to='/training-seasons' className='link'>
          <li>Training Seasons</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;