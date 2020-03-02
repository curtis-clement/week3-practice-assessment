import React from 'react';
import {NavLink} from 'react-router-dom';
import OpenOrClosed from './OpenOrClosed';

export default function HomePage() {
  return (
    <div>

      <h1>Welcome to our Clinic</h1>
      <br/>
        <NavLink to='/patientSignUp'> 
          <button type='button'>
            New Patients Click Here
          </button>
        </NavLink>
        <NavLink to='/onDuty'>
          <button type='button'>
            Current Doctors On Duty
          </button>
        </NavLink>
        <OpenOrClosed />
    </div>
  );
}