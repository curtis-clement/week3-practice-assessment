import React from 'react';
import {NavLink} from 'react-router-dom';

const today = new Date();
const time = today.getHours();
const clinicStatus = time > 8 && time < 17 ? "Open" : "Closed"

export default function HomePage() {
  return (
    <div>

      <h1>Welcome to our Clinic</h1>
      <br/>
      <p>Amsterdam GP Clinic
      <br/>
      Some Street 123
      <br/>
      0987FG, Amsterdam</p>
    
      <p>We are currently: {clinicStatus} 
        <br/>
        For appointments please call: 020 123 4567
      </p>

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

    </div>
  );
}