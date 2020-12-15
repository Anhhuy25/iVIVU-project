import React from 'react';
import { useGlobalContext } from './context';

const FormPersonalDetails = () => {
  const { step, setStep, occupation, setOccupation, city, setCity, list, setList, check, setCheck } = useGlobalContext();

  const nextStep = () => {
    setStep(step + 1)
  };

  const prevStep = () => {
    setStep(step - 1)
  };

  const handleClick = () => {
    if (occupation === '' || city === '') {
      setCheck(false)
    }
    else {
      setCheck(true)
      nextStep();

      setList({
        ...list,
        occupation,
        city
      })
    }
  }

  return (
    <div>
      <div className='form-personal'>
        <h1 className='title-form-personal'>Enter Personal Details</h1>
        <div className='input'>
          <input
            type="text"
            name='occupation'
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          <label htmlFor="occupation">Occupation</label>
        </div>
        <div className='input'>
          <input
            type="text"
            name='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="city">City</label>
        </div>
        <p className="check">
          {check ? '' : `Please enter all value`}
        </p>
        <div>
          <button className="btn-continue" onClick={handleClick}>Continue</button>
          <button className="btn-back" onClick={prevStep}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default FormPersonalDetails;