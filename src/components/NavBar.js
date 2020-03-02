import React from 'react';
import {NavLink} from 'react-router-dom';



export default function NavBar() {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <NavLink to='/' exact activeStyle={{fontWeight: 'bold'}}>
        <li>Home</li>
        </NavLink>
        <NavLink to='/patientSignUp' activeStyle={{fontWeight: 'bold'}}>
        <li>New Patient</li>
        </NavLink>
        <NavLink to='/onDuty' activeStyle={{fontWeight: 'bold'}}>
        <li>On Duty</li>
        </NavLink>
        <NavLink to='/doctorPortal' activeStyle={{fontWeight: 'bold'}}>
        <li>Doctors Portal</li>
        </NavLink>
      </ul>
    </nav>
  );
}

