import React, {useState} from 'react';
import PatientSignUpForm from './PatientSignUpForm';

function PatientSignUp() {

  return (
    <div>
      <h2>New Patients please fill in the following information:</h2>
      <PatientSignUpForm />
    </div>
  );
}

export default PatientSignUp;






// Test Patient Info
// const initalPatientList = [
//   {
//     id: 1, 
//     firstname: 'John', 
//     lastname: 'Smith', 
//     email: 'johnsmith@email.com',
//     phone: 12301234567,
//     gender: 'm/f',
//     DoB: '25/06/1954'},
//   {
//     id: 2, 
//     firstname: 'Susan', 
//     lastname: 'Johnson', 
//     email: 'susanjohnson@email.com',
//     phone: 12301234567,
//     gender: 'm/f',
//     DoB: '17/04/1999'},
//   {
//     id: 3, 
//     firstname: 'Mark', 
//     lastname: 'Cook', 
//     eamil: 'markcook@email.com',
//     phone: 12301234567,
//     gender: 'm/f',
//     DoB: '01/12/1980'},
// ]