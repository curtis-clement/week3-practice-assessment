import React from 'react';

export default function Patient(props) {
  //console.log('WHAT ARE THE PROPS', props)
  return (
    <div>
      <ul className='ul'>
      <li>Name: {props.firstname} {props.lastname}</li>
      <li>Email: {props.email}</li>
      <li>Phone: {props.phone}</li>
      <li>Phone: {props.gender}</li>
      <li>Date of Birth: {props.DoB}</li>
      </ul>
    </div>
  )
}