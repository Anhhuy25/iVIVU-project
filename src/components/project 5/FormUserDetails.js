import React from 'react';
import { useGlobalContext } from './context';

const FormUsersDetails = () => {
  const { step, setStep, firstName, setFirstName, lastName, setLastName, email, setEmail, list, setList, check, setCheck } = useGlobalContext();

  const nextStep = () => {
    setStep(step + 1)
  };

  const handleClick = () => {
    if (firstName === '' || lastName === '' || email === '') {
      setCheck(false)
    }
    else {
      setCheck(true)
      nextStep();

      setList({
        ...list,
        firstName,
        lastName,
        email
      })
    }
  }

  return (
    <div className='form-user'>
      <h1 className='title-form-user'>Enter User Details</h1>
      <div className='input'>
        <input
          type="text"
          name='firstname'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="firstname">First Name</label>
      </div>
      <div className='input'>
        <input
          type="text"
          name='lastname'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="lastname">Last Name</label>
      </div>
      <div className='input'>
        <input
          type="text"
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>
      <p className="check">
        {check ? '' : `Please enter all value`}
      </p>
      <button className="btn-form-user" onClick={handleClick}>Continue</button>
    </div>
  );
};

export default FormUsersDetails;