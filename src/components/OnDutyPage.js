import React, {useState, useEffect} from 'react';
import OpenOrClosed from './OpenOrClosed';
import axios from 'axios';

export default function OnDuty() {
  const [searchStatus, setSearchStatus] = useState('Idle');
  const [doctorOnDuty, setDoctorOnDuty] = useState([]);
  
  const onDuty = async () => {
    setSearchStatus('Loading');
    const info = await axios.get(
      'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors'
    );

    setDoctorOnDuty(info.data);
    setSearchStatus('Complete');
  }
    useEffect(() => {
      onDuty();
    }, []);
    const schedule = doctorOnDuty.map(doctor => {
      return (
        <div key={doctor.id}>
          {doctor.doctor} {doctor.onDuty === true ? "on duty" : "off duty"}
        </div>
      );
    })

  return (
    <div>
      <h2>Doctors Currently On Duty</h2>
      <p>{searchStatus}</p>
      {schedule}
      <br/>
      <OpenOrClosed />
    </div>
  );
}

