import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <Link to='/' >
        <li>Home</li>
        </Link>
        <Link to='/patientSignUp' >
        <li>New Patient</li>
        </Link>
        <Link to='/onDuty' >
        <li>On Duty</li>
        </Link>
        <Link to='/doctorPortal' >
        <li>Doctors Portal</li>
        </Link>
      </ul>
    </nav>
  );
}