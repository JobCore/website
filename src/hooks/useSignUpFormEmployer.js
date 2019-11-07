import React, {useState} from 'react';
import {signupEmployer} from '../actions'
/* eslint-disable */


const useSignUpFormEmployer = (queryEmail, accountType) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState('');

  const handleSubmit = (event) => {
    if (event) {
      let formData = Object.assign(inputs, {account_type : accountType})
      event.preventDefault();
      console.log(formData)
      signupEmployer(formData)
      setErrors(signupEmployer(formData))
    }
  }
  const handleInputChange = (event) => {
    event.persist();
      
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs,
      errors
    };
  }

  export default useSignUpFormEmployer;