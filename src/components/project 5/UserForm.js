import React from 'react';
import Confirm from './Confirm';
import { useGlobalContext } from './context';
import FormPersonalDetails from './FormPersonalDetails';
import FormUsersDetails from './FormUserDetails';
import Success from './Success';

const UserForm = () => {
  const { step } = useGlobalContext();

  switch (step) {
    case 1:
      return (
        <FormUsersDetails />
      );
    case 2:
      return (
        <FormPersonalDetails />
      );
    case 3:
      return (
        <Confirm />
      );
    case 4:
      return (
        <Success />
      )
  }

};

export default UserForm;