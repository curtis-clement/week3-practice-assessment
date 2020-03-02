import React, {useState} from 'react';
import Patient from './PatientList';
import PatientSignUpForm from './PatientSignUpForm';

const initalPatientList = [
  {
    id: 1, 
    firstname: 'John', 
    lastname: 'Smith', 
    email: 'johnsmith@email.com',
    phone: 12301234567,
    gender: 'm/f',
    DoB: '25/06/1954'},
  {
    id: 2, 
    firstname: 'Susan', 
    lastname: 'Johnson', 
    email: 'susanjohnson@email.com',
    phone: 12301234567,
    gender: 'm/f',
    DoB: '17/04/1999'},
  {
    id: 3, 
    firstname: 'Mark', 
    lastname: 'Cook', 
    eamil: 'markcook@email.com',
    phone: 12301234567,
    gender: 'm/f',
    DoB: '01/12/1980'},
]


export default function PatientSignUp() {
  const [patientInfo, setPatientInfo] = useState(initalPatientList)
  //console.log('WHAT ARE PATIENTS', patientInfo);

  return (
    <div>
      <h2>New Patients please fill in the following information:</h2>
      {/* <PatientSignUpForm addPatient={addPatient}/> */}
      <br />
      <p>Current Patients</p>
      {patientInfo.map((patient)=> {
        return <Patient key={patient.id}
        firstname={patient.firstname}
        lastname={patient.lastname}
        email={patient.email}
        phone={patient.phone}
        gender={patient.gender}
        DoB={patient.DoB}
        />
      })}
    </div>
  );
}
