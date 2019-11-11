import React, {useState, useEffect} from 'react';
import {signup, registerJobSeeker, signupValidation} from '../actions'
import validator from 'validator';
import { navigate } from "@reach/router"
/* eslint-disable */


const useSignUpForm = (queryEmail, accountType) => {
  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    phone: ""
  });
  useEffect(() => setInputs(inputs => ({...inputs, email: window.location.search.replace("?email=", '')})), []);
  console.log(window.location.search.replace("?email=", ''))
  const [errors, setErrors] = useState('');
  const [submitData, setSubmitData] = useState(0);
  const registerJobSeeker = async (jobseeker) => {
    const url = 'https://jobcore-test.herokuapp.com/api/user/register';
    const settings = {  
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": jobseeker.email, "account_type": "employee", "username": jobseeker.email, "first_name": jobseeker.firstName, "last_name": jobseeker.lastName, "password": jobseeker.password, "phone":jobseeker.phone  })
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        if(data["non_field_errors"]){
          setErrors(["This email already exist."])
        }else if(data["id"]){
          navigate("/job-seekers-thankyou/?success=true")
        }
        return data;
    } catch (e) {
        return e;
    }    
  
  }
  const handleSubmit = (event) => {
   
    setSubmitData(inputs)
    if (event) {
      let jobseeker = Object.assign(inputs, {account_type : accountType})
      event.preventDefault();
      var errorMsg = [];
    let formIsValid = false;
    
  
    if(validator.isEmpty(jobseeker.firstName)){
        errorMsg.push("First name is required");
        formIsValid = false   
    }
    if(validator.isEmpty(jobseeker.lastName)){
        errorMsg.push("Last name is required");
        formIsValid = false   
    }
    if(validator.isEmpty(jobseeker.email)){
        errorMsg.push("Email is required");
        formIsValid = false   
    }else if(!validator.isEmail(jobseeker.email)){
        errorMsg.push("Invalid email address");
        formIsValid = false   
    }
    if(validator.isEmpty(jobseeker.password)){
      errorMsg.push("Password is required");
      formIsValid = false   
  }else if(jobseeker.password.length < 7){
        errorMsg.push("Password must be 8 character long");
        formIsValid = false   
    }

    if (jobseeker.password !== jobseeker.repeatPassword){
        errorMsg.push("Password do not match");
        formIsValid = false
    }
    if(validator.isEmpty(jobseeker.phone)){
      errorMsg.push("Phone number is required");
      formIsValid = false   
  }
    if(errorMsg.length === 0){
        formIsValid = true
    }
    if(formIsValid){
      registerJobSeeker(jobseeker)
    
    }
     setErrors(errorMsg); 
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
      submitData,
      errors
    };
  }

  export default useSignUpForm;