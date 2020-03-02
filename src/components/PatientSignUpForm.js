import React from 'react';
import useForm from 'react-hook-form';

export default function PatientSignUpForm() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Type first name here' name='First Name' ref={register}/>
        <input type='text' placeholder='Type last name here' name='Last Name' ref={register}/>
        <input type='text' placeholder='Type email Here' name='email' ref={register}/>
        <input type='text' placeholder='Type phone number here' name='phone' ref={register}/>
        <input type='text' placeholder='Gender' name='Gender' ref={register}/>
        <input type='text' placeholder='DoB' name='DoB' ref={register}/>
      </form>
    </div>
  );
}
