import React, {useState} from 'react';

export default function PatientInfo(props) {

  const [detailState, setDetailState] = useState(false) 

  function details() {
    setDetailState(!detailState);
  };

  return (
    <div className='container'>
      <p>
      Patient Id: {props.id} <br/>
      Name: {props.lastname}, {props.firstname}<br/>
      Date of Birth: {props.dateofbirth}</p>
      <p>{detailState && `Gender: ${props.gender}`} <br/>
      {detailState && `Email: ${props.email}`} <br/>
      {detailState && `Phone: ${props.phone}`} <br/>
      {detailState && `Prescriptions: ${props.prescriptions}`} <br/>
      {detailState && `Doctor Id: ${props.doctorid}`}</p>
      <button onClick={details}>Show Patient Details</button>
    </div>
  )
}







// const [detailState, setDetailState] = useState(false) 

// function details() {
//   setDetailState(!detailState);
// }

// return (
//   <div className='container'>
//     <p>
//     Patient Id: {props.id} <br/>
//     Name: {props.lastname}, {props.firstname}<br/>
//     Date of Birth: {props.dateofbirth}</p>
//     <p>{details && `Email: ${props.email}`}</p>
//     <p>{details && `Phone: ${props.phone}`}</p>
//     <p>{details && `Prescriptions: ${props.prescriptions}`}</p>
//     <p>{details && `Doctor Id: ${props.doctorid}`}</p>
//     <button onClick={details}>Show Patient Details</button>
//   </div>
// )
// }