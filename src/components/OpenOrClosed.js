import React from 'react';

const today = new Date();
const time = today.getHours();
const clinicStatus = time > 8 && time < 17 ? "Open" : "Closed"

export default function OpenOrClosed () {
return (
  <div>
    <p>Amsterdam GP Clinic
    <br/>
    Some Street 123
    <br/>
    0987FG, Amsterdam
    </p>

    <p>We are currently: {clinicStatus} 
      <br/>
      For appointments please call: 020 123 4567
    </p>
  </div>
);
}