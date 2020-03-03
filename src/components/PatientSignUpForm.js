import React, {useState} from 'react';

export default function Form(props) {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [DoB, setDoB] = useState('');

  function submitInfo(event) {
    event.preventDefault()
    props.showNewPatient(firstName, lastName, email, phone, gender, DoB)
  };

  return (
    <div>
      <form onSubmit={submitInfo}>
      <label>First Name:</label>
        <input 
          firstname='first name'
          type='text'
          placeholder='Please Enter Your First Name'
          onChange={event => setFirstName(event.target.value)}
          />
      <label>Last Name:</label>
        <input 
          lastname='last name'
          type='text'
          placeholder='Please Enter Your Last Name'
          onChange={event => setLastName(event.target.value)}
          />
      <label>Email:</label>
        <input 
          email='email'
          type='text'
          placeholder='Please Enter Your Email Address'
          onChange={event => setEmail(event.target.value)}
          />
      <label>Phone:</label>
        <input 
          phone='phone'
          type='text'
          placeholder='Please Enter Your Phone Number'
          onChange={event => setPhone(event.target.value)}
          />
      <label>Gender:</label>
        <select 
          gender='gender'
          type='text'
          onChange={event => setGender(event.target.value)}
          >
            <option value=''>Select Your Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Non-Binary'>Non-Binary</option>
            <option value='Prefer Not To Answer'>Prefer Not To Answer</option>
        </select>
      <label>Date of Birth:</label>
        <input
          name='DoB'
          type='date'
          onChange={event => setDoB(event.target.value)}
          />
        <input type='Submit'/>
      </form>
    </div>
  );
}
