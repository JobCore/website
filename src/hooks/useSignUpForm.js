import React, {useState} from 'react';
import {signup} from '../actions'
/* eslint-disable */


const useSignUpForm = (queryEmail) => {
  const [inputs, setInputs] = useState({});
    
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      signup(inputs)
    }
  }
  const handleInputChange = (event) => {
    event.persist();
      
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

  export default useSignUpForm;