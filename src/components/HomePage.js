import React from 'react';
import {NavLink} from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to our Clinic</h1>
      <br/>
      <p>---dummy contact information ---</p>
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
    </div> // 
  );
}