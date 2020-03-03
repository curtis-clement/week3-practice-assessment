import React, {useState} from 'react';
import PatientSignUpForm from './PatientSignUpForm';

export default function PatientSignUp() {
  
  const initialState = ['']
  const [signUpState, setSignUpState] = useState(initialState)
  
  function showNewPatient(firstName, lastName, email, phone, gender, DoB) {
    const newPatient = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      Dob: DoB
    }
    console.log(showNewPatient)
    setSignUpState('Patient Has Been Added')
  }

  return (
    <div>
      <h2>New Patients please fill in the following information:</h2>
      <p>{signUpState}</p>
      <PatientSignUpForm showNewPatient={showNewPatient}/>
    </div>
  );
}
