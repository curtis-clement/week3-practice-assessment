import React, {useState} from 'react';

export default function PatientSignUpForm(props) {
  const [patientInfo, setPatientInfo] = useState("")

  function handleChange(event) {
    setPatientInfo(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addPatient()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input value={patientInfo} onChange={handleChange}/>
        <input type='Submit' />
      </form>
    </div>
  );
}