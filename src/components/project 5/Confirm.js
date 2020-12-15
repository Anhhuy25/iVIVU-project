import React from 'react';
import { useGlobalContext } from './context';

const Confirm = () => {
  const { list: { firstName, lastName, email, occupation, city }, step, setStep } = useGlobalContext();

  const nextStep = () => {
    setStep(step + 1)
  };

  const prevStep = () => {
    setStep(step - 1)
  };

  return (
    <div className="confirm">
      <h1 className='title-confirm'>Confirm</h1>
      <div className='input data-confirm'>
        <label>First Name:</label>
        {firstName}
      </div>
      <div className='input data-confirm'>
        <label>Last Name:</label>
        {lastName}
      </div>
      <div className='input data-confirm'>
        <label>Email:</label>
        {email}
      </div>
      <div className='input data-confirm'>
        <label>Occupation:</label>
        {occupation}
      </div>
      <div className='input data-confirm'>
        <label>City:</label>
        {city}
      </div>
      <div>
        <button className="btn-continue" onClick={nextStep}>Continue</button>
        <button className="btn-back" onClick={prevStep}>Back</button>
      </div>
    </div>
  );
};

export default Confirm;